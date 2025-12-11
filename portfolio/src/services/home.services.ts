import BaseServices from "./base.service";
import { HomePageApi } from "@/interfaces/page";

class HomeServices extends BaseServices {
  constructor() {
    super();
  }

  private static homePageUrl = this.apiBaseUrl + "/home-page?populate=*";

  static async getHomePageData() {
    const result = await this.handleGetRequest<HomePageApi>(this.homePageUrl);
    return result.data;
  }
}

export default HomeServices;
