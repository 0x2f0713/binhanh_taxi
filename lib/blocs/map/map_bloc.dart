import 'package:binhanh_taxi/models/car_location.dart';
import 'package:binhanh_taxi/repository/app_repository.dart';
import 'package:bloc/bloc.dart';
import 'package:dio/dio.dart';
import 'package:equatable/equatable.dart';

part 'map_event.dart';
part 'map_state.dart';

class MapBloc extends Bloc<MapEvent, MapState> {
  final AppRepository _appRepository;
  // late final List<Car> cars;
  MapBloc(Dio dio)
      : _appRepository = AppRepository(dio: dio),
        super(MapState()) {
    on<MapCarLocationInit>(_initCarLocation);
    on<MapCarLocationRefresh>(_refreshCarLocation);
    on<MapFocusCarEvent>(_focusCar);
  }
  void _initCarLocation(event, Emitter<MapState> emit) async {
    try {
      CarLocation? data = await _appRepository.requestInit();
      if (data != null) {
        emit(MapCarLocationInitalData(data));
      } else {
        emit(MapCarLocationError());
      }
    } on DioError {
      emit(MapCarLocationError());
    }
  }

  void _refreshCarLocation(event, Emitter<MapState> emit) async {
    try {
      CarLocation? data = await _appRepository.requestSyn();
      if (data != null) {
        emit(MapCarLocationUpdatedData(data));
      } else {
        emit(MapCarLocationError());
      }
    } on DioError {
      emit(MapCarLocationError());
    }
  }

  void _focusCar(MapFocusCarEvent event, Emitter<MapState> emit) {
    emit(MapFocusCarState(vehicleId: event.vehicleId));
  }
}
