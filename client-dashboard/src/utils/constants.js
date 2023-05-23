const SERVER_IP = "localhost:3200";
const API_VERSION = "v1";

export const ENV = {
  BASE_PATH: `http://${SERVER_IP}/api/${API_VERSION}`,
  API_ROUTES: {
    REGISTER: "auth/register",
    LOGIN: "auth/login",
    USER_ME: "users/me",
    REFRESH_TOKEN: "auth/refresh_access_token"
  },
  JWT:{
    ACCESS: "access",
    REFRESH: "refresh"
  }
};
