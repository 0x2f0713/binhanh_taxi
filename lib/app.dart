import 'package:binhanh_taxi/blocs/authentication/authentication_bloc.dart';
import 'package:binhanh_taxi/repository/authentication_repository.dart';
import 'package:binhanh_taxi/views/home/home_page.dart';
import 'package:binhanh_taxi/views/login/login_page.dart';
import 'package:dio/dio.dart';
import 'package:flow_builder/flow_builder.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class App extends StatelessWidget {
  const App(
      {Key? key,
      required AuthenticationRepository authenticationRepository,
      required Dio dio})
      : _authenticationRepository = authenticationRepository,
        _dio = dio,
        super(key: key);

  final AuthenticationRepository _authenticationRepository;
  final Dio _dio;

  @override
  Widget build(BuildContext context) {
    return GlobalData(
      dio: _dio,
      child: RepositoryProvider.value(
        value: _authenticationRepository,
        child: BlocProvider(
          create: (_) => AuthenticationBloc(
            authenticationRepository: _authenticationRepository,
          ),
          child: const AppView(),
        ),
      ),
    );
  }
}

class GlobalData extends InheritedWidget {
  final Dio dio;

  const GlobalData({Key? key, required this.dio, required Widget child})
      : super(key: key, child: child);

  @override
  bool updateShouldNotify(GlobalData oldWidget) {
    return dio != oldWidget.dio;
  }

  static GlobalData of(BuildContext context) {
    final GlobalData? result =
        context.dependOnInheritedWidgetOfExactType<GlobalData>();
    assert(result != null, 'No GlobalData found in context');
    return result!;
  }
}

class AppView extends StatelessWidget {
  const AppView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Taxi Bình Anh",
      home: FlowBuilder<AuthenticationStatus>(
          state: context.select((AuthenticationBloc bloc) => bloc.state.status),
          onGeneratePages:
              (AuthenticationStatus status, List<Page<dynamic>> pages) {
            if (status == AuthenticationStatus.authenticated) {
              return [HomePage.page()];
            } else {
              return [LoginPage.page()];
            }
          }),
    );
  }
}
