part of 'map_bloc.dart';

class MapEvent {}

class MapCarLocationInit extends MapEvent {}

class MapCarLocationRefresh extends MapEvent {}

class MapCarLocationLoading extends MapEvent {}

class MapFocusCarEvent extends MapEvent {
  final String vehicleId;

  MapFocusCarEvent({required this.vehicleId});
}
