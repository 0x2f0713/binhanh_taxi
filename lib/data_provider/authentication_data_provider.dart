import 'package:dio/dio.dart';

class AuthenticationDataProvider {
  final Dio _dio;
  AuthenticationDataProvider({required Dio dio}) : _dio = dio;
  Future<Response> fetchLoginPage() {
    return _dio.get<String>("https://taxi.binhanhcorp.com/");
  }

  Future<Response> login(String token, String username, String password) {
    return _dio.post("https://taxi.binhanhcorp.com/",
        data: {
          "__RequestVerificationToken": token,
          "Username": username,
          "Password": password,
        },
        options: Options(
            followRedirects: false,
            validateStatus: (status) {
              return (status ?? 200) < 500;
            }));
  }
}
