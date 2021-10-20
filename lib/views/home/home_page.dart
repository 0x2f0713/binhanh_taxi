import 'package:binhanh_taxi/app.dart';
import 'package:binhanh_taxi/blocs/car/car_bloc.dart';
import 'package:binhanh_taxi/blocs/map/map_bloc.dart';
import 'package:binhanh_taxi/views/home/map_view.dart';
import 'package:binhanh_taxi/views/home/panel_view.dart';
import 'package:binhanh_taxi/views/home/search_view.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

// ignore: must_be_immutable
class HomePage extends StatelessWidget {
  late MapBloc _mapBloc;
  late CarBloc _carBloc;

  HomePage({Key? key}) : super(key: key);
  static Page page() {
    return MaterialPage<void>(child: HomePage());
  }

  @override
  Widget build(BuildContext context) {
    _mapBloc = MapBloc(GlobalData.of(context).dio);
    _carBloc = CarBloc(GlobalData.of(context).dio);
    return Scaffold(
      body: MultiBlocProvider(
        providers: [
          BlocProvider<CarBloc>(
            create: (context) => _carBloc,
          ),
          BlocProvider<MapBloc>(
            create: (context) => _mapBloc,
          ),
        ],
        child: Stack(
          children: [
            MapView(mapBloc: _mapBloc),
            SildingUpPanelView(carBloc: _carBloc),
            const SearchView()
          ],
        ),
      ),
      bottomNavigationBar:
          BottomNavigationBar(items: const <BottomNavigationBarItem>[
        BottomNavigationBarItem(icon: Icon(Icons.map), label: "Bản đồ"),
        BottomNavigationBarItem(icon: Icon(Icons.analytics), label: "Thống kê"),
      ]),
    );
  }
}
