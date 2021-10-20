import 'package:binhanh_taxi/data_provider/app_data_provider.dart';
import 'package:binhanh_taxi/models/car.dart';
import 'package:binhanh_taxi/models/car_location.dart';
import 'package:dio/dio.dart';

class AppRepository {
  final AppDataProvider _appDataProvider;
  AppRepository({required Dio dio})
      : _appDataProvider = AppDataProvider(dio: dio);
  Future<List<Car>?> autoCompletePrivateCodeByUser() async {
    return (await _appDataProvider.autoCompletePrivateCodeByUser())
        .data!
        .map((e) => Car.fromJson(e))
        .toList();
  }

  Future<CarLocation?> requestInit() async {
    Map<String, dynamic>? data = (await _appDataProvider.requestInit()).data;
    if (data != null) {
      return CarLocation.fromJson(data);
    } else {
      return null;
    }
  }

  Future<CarLocation?> requestSyn() async {
    Map<String, dynamic>? data = (await _appDataProvider.requestSyn()).data;
    if (data != null) {
      return CarLocation.fromJson(data);
    } else {
      return null;
    }
  }
}
