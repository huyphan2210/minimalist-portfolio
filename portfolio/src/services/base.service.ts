class BaseServices {
  protected static apiBaseUrl =
    process.env.STRAPI_BASE_URL ?? "http://localhost:1337/api";

  private static requestOptions: RequestInit = {
    headers: {
      Authorization: `Bearer ${
        process.env.STRAPI_JWT ??
        "20eb8c7f35efbcfbdd5eb80560251e63d18e76973656a7df60bf177e6f1a0227082e2a5c289580f21225517749474a11757d88753af6eb40528ff84fcb6a567eab2218c5f4717570106e20cae13ad5c7b0b79771e865650b50ae9942020a87de4bb375846b85fc2e8cc902988f29af7ef8b262b5c712e3131ab040b397daa8f6"
      }`,
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
}

export default BaseServices;
