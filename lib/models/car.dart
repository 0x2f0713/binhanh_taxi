class Car {
  late String privateCode;
  late int vehicleId;
  late String vehiclePlate;
  late String displayText;
  late int vehicleTypeId;
  late int seat;
  late String typeName;
  late bool isVehiclePlateChanged;

  Car(
      {required this.privateCode,
      required this.vehicleId,
      required this.vehiclePlate,
      required this.displayText,
      required this.vehicleTypeId,
      required this.seat,
      required this.typeName,
      required this.isVehiclePlateChanged});

  Car.fromJson(Map<String, dynamic> json) {
    privateCode = json['PrivateCode'];
    vehicleId = json['VehicleId'];
    vehiclePlate = json['VehiclePlate'];
    displayText = json['DisplayText'];
    vehicleTypeId = json['VehicleTypeId'];
    seat = json['Seat'];
    typeName = json['TypeName'];
    isVehiclePlateChanged = json['IsVehiclePlateChanged'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['PrivateCode'] = privateCode;
    data['VehicleId'] = vehicleId;
    data['VehiclePlate'] = vehiclePlate;
    data['DisplayText'] = displayText;
    data['VehicleTypeId'] = vehicleTypeId;
    data['Seat'] = seat;
    data['TypeName'] = typeName;
    data['IsVehiclePlateChanged'] = isVehiclePlateChanged;
    return data;
  }
}
