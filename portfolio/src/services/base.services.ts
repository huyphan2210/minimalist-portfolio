class BaseServices {
  private static baseUrl = process.env.STRAPI_BASE_URL;

  protected static apiBaseUrl = this.baseUrl + "/api";

  private static requestOptions: RequestInit = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_JWT}`,
    },
  };

  protected static async handleGetRequest<T>(path: string) {
    try {
      const response = await fetch(path, this.requestOptions);
      const message = await response.json();
      if (!response.ok) {
        throw new Error(`Received HTTP Status ${response.status}`, {
          cause: message,
        });
      }
      return message as T;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static returnMediaFullURL(url: string) {
    return this.baseUrl + url;
  }
}

export default BaseServices;
