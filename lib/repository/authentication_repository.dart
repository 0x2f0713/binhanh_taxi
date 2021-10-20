import 'dart:async';

import 'package:binhanh_taxi/data_provider/authentication_data_provider.dart';
import 'package:dio/dio.dart';

enum AuthenticationStatus { unknown, authenticated, unauthenticated }

class AuthenticationRepository {
  final _controller = StreamController<AuthenticationStatus>();
  final AuthenticationDataProvider _authenticationDataProvider;

  AuthenticationRepository({required Dio dio})
      : _authenticationDataProvider = AuthenticationDataProvider(dio: dio);
  late final String? cookies;
  Stream<AuthenticationStatus> get status async* {
    await Future<void>.delayed(const Duration(seconds: 1));
    yield AuthenticationStatus.unauthenticated;
    yield* _controller.stream;
  }

  Future<String> getLoginToken() async {
    Response res = await _authenticationDataProvider.fetchLoginPage();
    return RegExp(r'[a-zA-Z0-9-_]{108}', multiLine: true, dotAll: true)
            .stringMatch(res.data) ??
        "";
  }

  Future<String?> logIn({
    required String username,
    required String password,
  }) async {
    String res = await getLoginToken();
    _authenticationDataProvider.login(res, username, password).then((value) {
      cookies = "prov=f1ad41c8-e652-3676-c19c-0a0b04daa485;";
      _controller.add(AuthenticationStatus.authenticated);
    });
  }

  void logOut() {
    _controller.add(AuthenticationStatus.unauthenticated);
  }

  void dispose() => _controller.close();
}
