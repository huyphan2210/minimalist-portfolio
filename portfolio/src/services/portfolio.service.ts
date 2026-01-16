import {
  IPagePortfolio,
  IProjectBriefInfo,
} from "@/interfaces/api/page-portfolio";
import BaseServices from "./base.services";
import { IPortfolioPageApi } from "@/interfaces/page";

class PortfolioServices extends BaseServices {
  private static portfolioApiUrl =
    this.apiBaseUrl + "/page-portfolio?populate=*";

  static async getPortfolioPageData(): Promise<Required<IPagePortfolio>> {
    const { data } = await this.handleGetRequest<IPortfolioPageApi>(
      this.portfolioApiUrl
    );

    for (const project of data.projects) {
      project.projectName =
        project.projectName || this.DEFAULT_PORTFOLIO_PROJECT_DATA.projectName;
      project.projectDescription =
        project.projectDescription ||
        this.DEFAULT_PORTFOLIO_PROJECT_DATA.projectDescription;
      project.projectRelativeCtaContent =
        project.projectRelativeCtaContent ||
        this.DEFAULT_PORTFOLIO_PROJECT_DATA.projectRelativeCtaContent;
      project.projectThumbnailURL =
        project.projectThumbnailURL ||
        this.DEFAULT_PORTFOLIO_PROJECT_DATA.projectThumbnailURL;
    }

    return this.enrich<IPagePortfolio>(
      data,
      this.DEFAULT_PORTFOLIO_PAGE_DATA
    );
  }

  private static DEFAULT_PORTFOLIO_PAGE_DATA: Required<IPagePortfolio> = {
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    publishedAt: new Date(),
    projects: [],
  };

  private static DEFAULT_PORTFOLIO_PROJECT_DATA: Required<IProjectBriefInfo> =
    {
      projectName: "This is a mystery",
      projectDescription: "This is also another mystery",
      projectRelativeCtaContent: "NOT AVAILABLE",
      projectThumbnailURL:
        "https://res.cloudinary.com/dejteftxn/image/upload/v1736743752/Books_lyxqds.avif",
    };
}

export default PortfolioServices;
