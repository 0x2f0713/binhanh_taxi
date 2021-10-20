import 'dart:async';
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:binhanh_taxi/blocs/map/map_bloc.dart';
import 'package:binhanh_taxi/models/car_location.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

class MapView extends StatefulWidget {
  const MapView({Key? key, required this.mapBloc}) : super(key: key);
  final MapBloc mapBloc;
  @override
  _MapViewState createState() => _MapViewState();
}

class _MapViewState extends State<MapView> {
  late GoogleMapController _mapController;
  late Timer _timer;
  late Uint8List idleCarIcon;
  late Uint8List servingMachineOffCarIcon;
  late Uint8List servingMachineOnCarIcon;
  late Uint8List unavailableCarIcon;
  Set<Marker> markers = <Marker>{};
  // late BitmapDescriptor carIcon;

  @override
  void initState() {
    widget.mapBloc.add(MapCarLocationInit());
    _timer = Timer.periodic(const Duration(seconds: 5), (Timer timer) {
      if (markers.isNotEmpty) {
        widget.mapBloc.add(MapCarLocationRefresh());
      }
    });
    super.initState();
    setCustomMapPin();
  }

  @override
  Widget build(BuildContext context) {
    return BlocListener<MapBloc, MapState>(
      listener: (context, state) {
        if (state is MapCarLocationInitalData) {
          return initMarkers(state.carLocationData);
        }
        if (state is MapCarLocationUpdatedData) {
          return updateMarkers(state.carLocationData);
        }
        if (state is MapFocusCarState) {
          List<Marker> listMarkers = markers.toList();
          int index = listMarkers.indexWhere(
              (element) => element.markerId.value == state.vehicleId);
          if (index < 0) {
            ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('Không tìm thấy vị trí xe')));
          } else {
            CameraUpdate cameraUpdate = CameraUpdate.newCameraPosition(
                CameraPosition(target: listMarkers[index].position, zoom: 18));
            _mapController.moveCamera(cameraUpdate);
          }
          return;
        }
        if (state is MapCarLocationError) {
          ScaffoldMessenger.of(context)
              .showSnackBar(SnackBar(content: Text(state.msg)));
        }
      },
      child: GoogleMap(
        myLocationButtonEnabled: true,
        zoomControlsEnabled: false,
        onMapCreated: (GoogleMapController controller) {
          _mapController = controller;
        },
        initialCameraPosition: const CameraPosition(
            target: LatLng(20.8782677, 106.6304842), zoom: 13),
        markers: markers,
      ),
    );
  }

  @override
  void dispose() {
    _timer.cancel();
    super.dispose();
  }

  void setCustomMapPin() async {
    idleCarIcon = await getBytesFromAsset('assets/idle_car.png', 64);
    servingMachineOffCarIcon =
        await getBytesFromAsset('assets/serving_machineoff_car.png', 64);
    servingMachineOnCarIcon =
        await getBytesFromAsset('assets/serving_machineon_car.png', 64);
    unavailableCarIcon =
        await getBytesFromAsset('assets/unavailable_car.png', 64);
  }

  Future<Uint8List> getBytesFromAsset(String path, int width) async {
    ByteData data = await rootBundle.load(path);
    ui.Codec codec = await ui.instantiateImageCodec(data.buffer.asUint8List(),
        targetWidth: width);
    ui.FrameInfo fi = await codec.getNextFrame();
    return (await fi.image.toByteData(format: ui.ImageByteFormat.png))!
        .buffer
        .asUint8List();
  }

  BitmapDescriptor icon(Data data) {
    switch (getStatus(data.vehicleState)) {
      case 0:
        return BitmapDescriptor.fromBytes(idleCarIcon);
      case 1:
        return BitmapDescriptor.fromBytes(servingMachineOnCarIcon);
      case 2:
        return BitmapDescriptor.fromBytes(unavailableCarIcon);
      default:
        return BitmapDescriptor.fromBytes(servingMachineOffCarIcon);
    }
  }

  int getStatus(status) {
    // May bat
    if ((status & 8) == 0) {
      if ((status & 3) == 0) {
        return 0;
      } else {
        return 1;
      }
    } else {
      if ((status & 3) == 0) {
        return 2;
      } else {
        return 3;
      }
    }
  }

  void initMarkers(CarLocation carLocation) {
    for (Data i in carLocation.data) {
      markers.add(Marker(
        markerId: MarkerId("${i.vehicleID}"),
        position: LatLng(i.latitude, i.longitude),
        icon: icon(i),
        rotation: (i.vehicleDirection * 45).toDouble(),
      ));
    }
    setState(() {});
  }

  void updateMarkers(CarLocation carLocation) {
    List<Marker> listMarkers = markers.toList();
    for (Data i in carLocation.data) {
      int index = listMarkers
          .indexWhere((element) => element.markerId.value == "${i.vehicleID}");
      if (index < 0) {
        listMarkers.add(Marker(
          markerId: MarkerId("${i.vehicleID}"),
          position: LatLng(i.latitude, i.longitude),
          icon: icon(i),
          rotation: (i.vehicleDirection * 45).toDouble(),
        ));
      } else {
        listMarkers[index] = Marker(
          markerId: MarkerId("${i.vehicleID}"),
          position: LatLng(i.latitude, i.longitude),
          icon: icon(i),
          rotation: (i.vehicleDirection * 45).toDouble(),
        );
      }
    }
    markers = listMarkers.toSet();
    setState(() {});
  }
}
