part of 'car_bloc.dart';

class CarEvent {}

class CarInit extends CarEvent {}

class CarSearch extends CarEvent {
  String query;
  CarSearch({required this.query});
}
