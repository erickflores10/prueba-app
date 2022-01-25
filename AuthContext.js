import React, { useState, createContext } from "react";

export const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

export function AuthProvider(props) {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);
  const [userData, setUserData] = useState(undefined);

  const login = (auth, userData) => {
    setAuth(auth);
    setUserData(userData);
  };

  const logout = () => {
    setAuth(undefined);
    setUserData(undefined);
  };

  const valueContext = {
    auth,
    userData,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
