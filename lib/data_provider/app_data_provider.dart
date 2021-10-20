import 'package:dio/dio.dart';

class AppDataProvider {
  final Dio _dio;
  AppDataProvider({required Dio dio}) : _dio = dio;
  Future<Response<List>> autoCompletePrivateCodeByUser() {
    return _dio.get<List>(
      "https://taxi.binhanhcorp.com/Common/AutoCompletePrivateCodeByUser",
    );
  }

  Future<Response<Map<String, dynamic>>> requestInit() {
    return _dio.get<Map<String, dynamic>>(
      "https://taxi.binhanhcorp.com/Online/RequestInit",
      options: Options(responseType: ResponseType.json),
    );
  }

  Future<Response<Map<String, dynamic>>> requestSyn() {
    return _dio.get<Map<String, dynamic>>(
      "https://taxi.binhanhcorp.com/Online/RequestSyn",
      options: Options(responseType: ResponseType.json),
    );
  }
}
