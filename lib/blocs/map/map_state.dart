part of 'map_bloc.dart';

class MapState extends Equatable {
  @override
  List<Object> get props => [];
}

class MapLoading extends MapState {}

class MapCarLocationInitalData extends MapState {
  MapCarLocationInitalData(this.carLocationData);
  final CarLocation carLocationData;
  @override
  List<Object> get props => [carLocationData];
}

class MapCarLocationUpdatedData extends MapState {
  MapCarLocationUpdatedData(this.carLocationData);
  final CarLocation carLocationData;
  @override
  List<Object> get props => [carLocationData];
}

class MapCarLocationError extends MapState {
  final String msg = "Lỗi khi tải dữ liệu vị trí xe";
  @override
  List<Object> get props => [msg];
}

class MapFocusCarState extends MapState {
  final String vehicleId;

  MapFocusCarState({required this.vehicleId});
  @override
  List<Object> get props => [vehicleId];
}
