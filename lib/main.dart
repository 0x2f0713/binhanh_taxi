import 'package:binhanh_taxi/app.dart';
import 'package:binhanh_taxi/appblocobserver.dart';
import 'package:binhanh_taxi/repository/authentication_repository.dart';
import 'package:cookie_jar/cookie_jar.dart';
import 'package:dio/dio.dart';
import 'package:dio_cookie_manager/dio_cookie_manager.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

void main() async {
  await dotenv.load(fileName: ".env");
  Bloc.observer = AppBlocObserver();
  Dio dio = Dio();
  var cookieJar = CookieJar();
  dio.interceptors.add(CookieManager(cookieJar));
  runApp(App(
    authenticationRepository: AuthenticationRepository(dio: dio),
    dio: dio,
  ));
}
