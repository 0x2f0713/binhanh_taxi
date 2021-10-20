import 'package:binhanh_taxi/models/car.dart';
import 'package:binhanh_taxi/repository/app_repository.dart';
import 'package:bloc/bloc.dart';
import 'package:dio/dio.dart';
import 'package:equatable/equatable.dart';

part 'car_event.dart';
part 'car_state.dart';

class CarBloc extends Bloc<CarEvent, CarState> {
  final AppRepository _appRepository;
  List<Car>? cars;
  CarBloc(Dio dio)
      : _appRepository = AppRepository(dio: dio),
        super(CarInitial()) {
    on<CarInit>((event, emit) async {
      try {
        cars = await _appRepository.autoCompletePrivateCodeByUser();
        emit(CarLoaded(cars ?? []));
      } on DioError {
        emit(CarError());
      }
    });
    on<CarSearch>((event, emit) async {
      List<Car> res = cars!
          .where((element) => element.displayText.contains(event.query))
          .toList();
      emit(CarSearchResult(res));
    });
  }
}
