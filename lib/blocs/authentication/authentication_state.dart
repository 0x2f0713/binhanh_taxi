part of 'authentication_bloc.dart';

class AuthenticationState extends Equatable {
  const AuthenticationState._({
    this.status = AuthenticationStatus.unknown,
    this.cookies,
  });

  const AuthenticationState.unknown() : this._();

  AuthenticationState.authenticated(String cookies)
      : this._(
            status: AuthenticationStatus.authenticated,
            cookies: Cookie.fromSetCookieValue(cookies));

  const AuthenticationState.unauthenticated()
      : this._(status: AuthenticationStatus.unauthenticated);

  final AuthenticationStatus status;
  final Cookie? cookies;

  @override
  List<Object> get props => [status];
}
