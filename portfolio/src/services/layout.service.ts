import BaseServices from "./base.service";
import { ILayoutApi } from "@/interfaces/layout";

class LayoutService extends BaseServices {
  private static layoutApiURL = this.apiBaseUrl + "/layout";

  static async getLayoutData() {
    const response = await this.handleGetRequest<ILayoutApi>(this.layoutApiURL);
    return response.data;
  }
}

export default LayoutService;
