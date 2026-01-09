import { ProjectBriefInfo_Plain } from "@/interfaces/api/page-portfolio";
import BaseServices from "./base.services";
import { IPortfolioDetailsPageApi } from "@/interfaces/page";

class PortfolioDetailsServices extends BaseServices {
  private static getPortfolioDetailsApiUrl(projectSlug: string) {
    return `${this.apiBaseUrl}/page-project-detail?filters[slug][$eq]=${projectSlug}&populate=*`;
  }

  //   TODO: Change ProjectBriefInfo_Plain to full info of the project
  static async getPortfolioDetailPageData(
    projectSlug: string
  ): Promise<Required<ProjectBriefInfo_Plain>> {
    const { data } = await this.handleGetRequest<IPortfolioDetailsPageApi>(
      this.getPortfolioDetailsApiUrl(projectSlug)
    );

    //   TODO: Return real data
    return this.DEFAULT_PORTFOLIO_DETAILS_PAGE_DATA;
  }

  //   TODO: Change ProjectBriefInfo_Plain to full info of the project
  private static DEFAULT_PORTFOLIO_DETAILS_PAGE_DATA: Required<ProjectBriefInfo_Plain> =
    {
      projectName: "DEFAULT PROJECT",
      projectDescription: "DEFAULT DESCRIPTION",
      projectRelativeURL: "/",
      projectRelativeCtaContent: "",
      projectThumbnailURL: "",
    };
}

export default PortfolioDetailsServices;
