import BaseServices from "./base.service";

class HomeServices extends BaseServices {
  private static homePageUrl = this.apiBaseUrl + "/home-page";

  static getHomePageContent() {
    return this.handleGetRequest(this.homePageUrl);
  }
}

export default HomeServices;
