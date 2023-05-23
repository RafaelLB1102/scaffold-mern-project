//Mover estado a nivel global de la aplicación
import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  useEffect(() => {
    //Comprobar si el usuario esta logueado o no
  }, []);

  const login = async (accessToken) => {
    try {
      setUser({ firstname: "Jhon" });
      console.log("token", accessToken);
      setToken(accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  const data = {
    accessToken: token,
    user,
    login,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
