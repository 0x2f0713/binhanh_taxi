import 'package:binhanh_taxi/blocs/car/car_bloc.dart';
import 'package:binhanh_taxi/blocs/map/map_bloc.dart';
import 'package:binhanh_taxi/models/car.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:sliding_up_panel/sliding_up_panel.dart';

class SildingUpPanelView extends StatefulWidget {
  final CarBloc carBloc;
  const SildingUpPanelView({Key? key, required this.carBloc}) : super(key: key);

  @override
  _PanelViewState createState() => _PanelViewState();
}

class _PanelViewState extends State<SildingUpPanelView> {
  int vehicleSelectedId = 0;
  List<Car> cars = [];
  @override
  void initState() {
    widget.carBloc.add(CarInit());
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return SlidingUpPanel(
      minHeight: MediaQuery.of(context).size.height * 0.1,
      maxHeight: MediaQuery.of(context).size.height * 0.3,
      backdropEnabled: true,
      header: Container(
        decoration: const BoxDecoration(
          borderRadius: BorderRadius.vertical(top: Radius.circular(18)),
          color: Colors.white,
        ),
        padding: const EdgeInsets.fromLTRB(0, 10, 0, 10),
        width: MediaQuery.of(context).size.width,
        child: Center(
            child: Container(
          width: 40,
          height: 5,
          decoration: BoxDecoration(
              color: Colors.grey[300],
              borderRadius: const BorderRadius.all(Radius.circular(18))),
        )),
      ),
      panelBuilder: (ScrollController sc) => Stack(
        children: [
          BlocListener<CarBloc, CarState>(
            listener: (context, state) {
              if (state is CarLoaded) {
                setState(() {
                  cars = state.cars;
                });
                return;
              }
              if (state is CarError) {
                ScaffoldMessenger.of(context)
                    .showSnackBar(SnackBar(content: Text(state.msg)));
              }
            },
            child: Builder(builder: (context) {
              if (cars.isNotEmpty) {
                return ListView.builder(
                  controller: sc,
                  itemCount: cars.length,
                  itemBuilder: (_, index) {
                    return ListTile(
                      leading: const Icon(Icons.local_taxi),
                      title: Text("Xe ${cars[index].privateCode}"),
                      subtitle: Text(
                          "${cars[index].vehiclePlate}\n${cars[index].typeName}"),
                      isThreeLine: true,
                      selected: vehicleSelectedId == cars[index].vehicleId,
                      onTap: () {
                        setState(() {
                          vehicleSelectedId = cars[index].vehicleId;
                          context.read<MapBloc>().add(MapFocusCarEvent(
                              vehicleId: "${cars[index].vehicleId}"));
                        });
                      },
                    );
                  },
                );
              } else {
                return const Center(
                  child: CircularProgressIndicator(),
                );
              }
            }),
          ),
        ],
      ),
      borderRadius: const BorderRadius.vertical(top: Radius.circular(18)),
    );
  }
}
