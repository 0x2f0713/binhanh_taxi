part of 'car_bloc.dart';

abstract class CarState extends Equatable {
  const CarState();

  @override
  List<Object> get props => [];
}

class CarInitial extends CarState {}

class CarLoading extends CarState {}

class CarLoaded extends CarState {
  final List<Car> cars;

  const CarLoaded(this.cars);
  @override
  List<Object> get props => [cars];
}

class CarSearchResult extends CarState {
  final List<Car> result;

  const CarSearchResult(this.result);
  @override
  List<Object> get props => [result];
}

class CarError extends CarState {
  final String msg = "Lỗi khi tải dữ liệu xe taxi";
  @override
  List<Object> get props => [msg];
}
