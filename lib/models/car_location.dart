class CarLocation {
  late String success;
  late List<Data> data;
  late int dcount;

  CarLocation(
      {required this.success, required this.data, required this.dcount});

  CarLocation.fromJson(Map<String, dynamic> json) {
    success = json['success'];
    if (json['data'] != null) {
      data = <Data>[];
      json['data'].forEach((v) {
        data.add(Data.fromJson(v));
      });
    }
    dcount = json['dcount'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['success'] = success;
    data['data'] = this.data.map((v) => v.toJson()).toList();
    data['dcount'] = dcount;
    return data;
  }
}

class Data {
  late int vehicleID;
  late String vehicleTime;
  late String gpsTime;
  late double longitude;
  late double latitude;
  late num velocityGPS;
  late num velocityMechanical;
  late num vehicleDirection;
  late int vehicleState;
  late num otherState;
  late num minuteOfManchineOnWhenStop;
  late num highEmptyKm;
  late num limitMinutes;
  late num kmEmpty;
  late num stopped;
  late bool isLocked;
  late num levelID;
  // late num currentEmptyKM;
  // late num isLostVehicleInfo;
  // late num i20;
  // late String? n21;
  // late Null n22;
  // late Null n23;
  // late bool b24;
  // late String s40;
  // late String s41;
  // late num i42;
  // late num i43;
  // late String s44;
  // late num i45;
  // late String s51;
  // late String s54;
  // late Null n55;
  late bool isLockMeter;

  Data({
    required this.vehicleID,
    required this.vehicleTime,
    required this.gpsTime,
    required this.longitude,
    required this.latitude,
    required this.velocityGPS,
    required this.velocityMechanical,
    required this.vehicleDirection,
    required this.vehicleState,
    required this.otherState,
    required this.minuteOfManchineOnWhenStop,
    required this.highEmptyKm,
    required this.limitMinutes,
    required this.kmEmpty,
    required this.stopped,
    required this.isLocked,
    required this.levelID,
    // required this.i18,
    // required this.n19,
    // required this.i20,
    // required this.n21,
    // required this.n22,
    // required this.n23,
    // required this.b24,
    // required this.s40,
    // required this.s41,
    // required this.i42,
    // required this.i43,
    // required this.s44,
    // required this.i45,
    // required this.s51,
    // required this.s54,
    // required this.n55,
    // required this.b56
  });

  Data.fromJson(Map<String, dynamic> json) {
    vehicleID = json['1'];
    vehicleTime = json['2'];
    gpsTime = json['3'];
    longitude = json['4'];
    latitude = json['5'];
    velocityGPS = json['6'];
    velocityMechanical = json['7'];
    vehicleDirection = json['8'];
    vehicleState = json['9'];
    otherState = json['10'];
    minuteOfManchineOnWhenStop = json['11'];
    highEmptyKm = json['12'];
    limitMinutes = json['13'];
    kmEmpty = json['14'];
    stopped = json['15'];
    isLocked = json['16'];
    levelID = json['17'] ?? 0;
    // i18 = json['18'];
    // n19 = json['19'];
    // i20 = json['20'];
    // n21 = json['21'];
    // n22 = json['22'];
    // n23 = json['23'];
    // b24 = json['24'];
    // s40 = json['40'];
    // s41 = json['41'];
    // i42 = json['42'];
    // i43 = json['43'];
    // s44 = json['44'];
    // i45 = json['45'];
    // s51 = json['51'];
    // s54 = json['54'];
    // n55 = json['55'];
    // b56 = json['56'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['1'] = vehicleID;
    data['2'] = vehicleTime;
    data['3'] = gpsTime;
    data['4'] = longitude;
    data['5'] = latitude;
    data['6'] = velocityGPS;
    data['7'] = velocityMechanical;
    data['8'] = vehicleDirection;
    data['9'] = vehicleState;
    data['10'] = otherState;
    data['11'] = minuteOfManchineOnWhenStop;
    data['12'] = highEmptyKm;
    data['13'] = limitMinutes;
    data['14'] = kmEmpty;
    data['15'] = stopped;
    data['16'] = isLocked;
    data['17'] = levelID;
    // data['18'] = this.i18;
    // data['19'] = this.n19;
    // data['20'] = this.i20;
    // data['21'] = this.n21;
    // data['22'] = this.n22;
    // data['23'] = this.n23;
    // data['24'] = this.b24;
    // data['40'] = this.s40;
    // data['41'] = this.s41;
    // data['42'] = this.i42;
    // data['43'] = this.i43;
    // data['44'] = this.s44;
    // data['45'] = this.i45;
    // data['51'] = this.s51;
    // data['54'] = this.s54;
    // data['55'] = this.n55;
    // data['56'] = this.b56;
    return data;
  }
}
