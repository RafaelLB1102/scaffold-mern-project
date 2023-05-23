import { ENV } from "../utils";


const USER_ME_ROUTE = ENV.API_ROUTES.USER_ME;
const CONTENT_TYPE_JSON = "application/json";

export class User {
  baseApi = ENV.BASE_PATH;

  async getMe(accessToken) {
    try {
      const response = await fetch(`${this.baseApi}/${USER_ME_ROUTE}`, {
        method: "GET",
        headers: {
          "Content-Type": CONTENT_TYPE_JSON,
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
}
