import { ILayout } from "@/interfaces/api/layout";
import BaseServices from "./base.services";
import { ILayoutApi } from "@/interfaces/layout";

class LayoutService extends BaseServices {
  private static layoutApiURL = this.apiBaseUrl + "/layout";

  static async getLayoutData(): Promise<Required<ILayout>> {
    const { data } = await this.handleGetRequest<ILayoutApi>(this.layoutApiURL);
    return this.enrich<ILayout>(data, this.DEFAULT_LAYOUT_DATA);
  }

  private static DEFAULT_LAYOUT_DATA: Required<ILayout> = {
    id: 2,
    contactMeHeading: "Interested in doing a project together?",
    contactMeURL: "/contact",
    contactMeButtonContent: "CONTACT ME",
    createdAt: new Date(),
    updatedAt: new Date(),
    publishedAt: new Date(),
    navigations: [],
  };
}

export default LayoutService;
