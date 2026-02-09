import { LOGIN, LOGOUT } from "./actionTypes";

export type LoginAction = {
  type: typeof LOGIN;
  payload: {
    token: string;
    name: string;
    isAuthenticated: boolean;
  };
};

export type LogoutAction = {
  type: typeof LOGOUT;
};

export type AuthAction = LoginAction | LogoutAction;
