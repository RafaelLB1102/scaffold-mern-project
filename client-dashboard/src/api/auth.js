import { ENV } from "../utils";

const { BASE_PATH, API_ROUTES } = ENV;

export class Auth {
  baseApi = BASE_PATH;

  register = async (data) => {
    const url = `${this.baseApi}/${API_ROUTES.REGISTER}`;
    console.log(url);
    const params = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(params);

    try {
      const response = await fetch(url, params);
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}
