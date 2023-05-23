//Mover estado a nivel global de la aplicación
import { useState, useEffect, createContext } from "react";
import { User, Auth } from "../api";

const userController = new User();
const authController = new Auth();
export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  // La sgte variable intentara recuperar la sesión del usuario
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      //Comprobar si el usuario esta logueado o no
      const accessToken = authController.getAccessToken();
      const refreshToken = authController.getRefreshToken();
      console.log(
        `accessToken= ${accessToken}\n refreshToken= ${refreshToken}`
      );
      if (!accessToken && !refreshToken) {
        logout();
        setLoading(false);
        return;
      }
      /* Para poder visualizar nuevamente el contenido del usuario que inicio sesión
    hay que cambiar el estado de loading, de lo contrario, la pág queda en blanco
    Todo debe estar dentro de una función asincrona esperando que loading termine */
      setLoading(false);
    })();
  }, []);

  const login = async (accessToken) => {
    try {
      const response = await userController.getMe(accessToken);
      delete response.new_password;
      // Ya se tienen los datos del usuario para utilizarlos en cualquier vista del frontend
      setUser(response);
      setToken(accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    setUser(null);
    setToken(null);
    authController.removeTokens();
  };

  const data = {
    accessToken: token,
    user,
    login,
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
