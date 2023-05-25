export enum RouteName {
  HOME = "HOME",
  REGISTER = "REGISTER",
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  LOGIN_FORM = "LOGIN_FORM",
}

export const RoutePaths: { [x in RouteName]: string } = {
  HOME: "/",
  REGISTER: "/login/register",
  LOGIN: "/login",
  LOGOUT: "/logout",
  LOGIN_FORM: "/login/form",
};

export const RouteTexts: { [x in RouteName]: string } = {
  HOME: "Home",
  REGISTER: "Register",
  LOGIN: "Login",
  LOGOUT: "Logout",
  LOGIN_FORM: "LoginForm"
};

export const RouteMaps: { [x in (typeof RoutePaths)[RouteName]]: string } = {
  ...Object.keys(RoutePaths).reduce((v: any, k) => {
    v[RoutePaths[k as RouteName]] = RouteTexts[k as RouteName];
    return v;
  }, {}),
};

export const headerLessRoutes = [
    //RoutePaths.Home
    RoutePaths.REGISTER,
    RoutePaths.LOGIN,
    RoutePaths.LOGOUT,
    RoutePaths.LOGIN_FORM,
];
