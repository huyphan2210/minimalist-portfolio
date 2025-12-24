import { Layout_Plain } from "@/interfaces/api/layout";
import BaseServices from "./base.service";
import { ILayoutApi } from "@/interfaces/layout";

class LayoutService extends BaseServices {
  private static layoutApiURL = this.apiBaseUrl + "/layout";

  static async getLayoutData(): Promise<Required<Layout_Plain>> {
    const { data } = await this.handleGetRequest<ILayoutApi>(this.layoutApiURL);
    return {
      id: data.id || this.DEFAULT_LAYOUT_DATA.id,
      contactMeHeading:
        data.contactMeHeading || this.DEFAULT_LAYOUT_DATA.contactMeHeading,
      contactMeURL: data.contactMeURL || this.DEFAULT_LAYOUT_DATA.contactMeURL,
      contactMeButtonContent:
        data.contactMeButtonContent ||
        this.DEFAULT_LAYOUT_DATA.contactMeButtonContent,
      createdAt: data.createdAt || this.DEFAULT_LAYOUT_DATA.createdAt,
      updatedAt: data.updatedAt || this.DEFAULT_LAYOUT_DATA.updatedAt,
      publishedAt: data.publishedAt || this.DEFAULT_LAYOUT_DATA.publishedAt,
      navigations: data.navigations || this.DEFAULT_LAYOUT_DATA.navigations,
    };
  }

  static DEFAULT_LAYOUT_DATA: Required<Layout_Plain> = {
    id: 2,
    contactMeHeading: "Interested in doing a project together?",
    contactMeURL: "/contact-me",
    contactMeButtonContent: "CONTACT ME",
    createdAt: new Date(),
    updatedAt: new Date(),
    publishedAt: new Date(),
    navigations: [],
  };
}

export default LayoutService;
