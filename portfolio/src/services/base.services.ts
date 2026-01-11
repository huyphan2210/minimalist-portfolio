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

  protected static enrich<T extends object>(
    base: T,
    fallback: Partial<T>
  ): Required<T> {
    const result = { ...base };
    for (const key in fallback) {
      const value = result[key];

      const isEmptyArray = Array.isArray(value) && value.length === 0;
      const isEmptyString = value === "";
      const isNullish = value == null;

      if (isNullish || isEmptyString || isEmptyArray) {
        result[key] = fallback[key] as T[typeof key];
      }
    }

    return result as Required<T>;
  }
}

export default BaseServices;
