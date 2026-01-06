import {
  PagePortfolio_Plain,
  ProjectBriefInfo_Plain,
} from "@/interfaces/api/page-portfolio";
import BaseServices from "./base.services";
import { IPortfolioPageApi } from "@/interfaces/page";

class PortfolioServices extends BaseServices {
  private static portfolioApiUrl = this.apiBaseUrl + "/page-portfolio?populate=*";

  static async getPortfolioPageData(): Promise<Required<PagePortfolio_Plain>> {
    const { data } = await this.handleGetRequest<IPortfolioPageApi>(
      this.portfolioApiUrl
    );

    for (const project of data.projects) {
      project.projectName =
        project.projectName || this.DEFAULT_PORTFOLIO_PROJECT_DATA.projectName;
      project.projectDescription =
        project.projectDescription ||
        this.DEFAULT_PORTFOLIO_PROJECT_DATA.projectDescription;
      project.projectRelativeURL =
        project.projectRelativeURL ||
        this.DEFAULT_PORTFOLIO_PROJECT_DATA.projectRelativeURL;
      project.projectRelativeCtaContent =
        project.projectRelativeCtaContent ||
        this.DEFAULT_PORTFOLIO_PROJECT_DATA.projectRelativeCtaContent;
      project.projectThumbnailURL =
        project.projectThumbnailURL ||
        this.DEFAULT_PORTFOLIO_PROJECT_DATA.projectThumbnailURL;
    }

    return {
      id: data.id || this.DEFAULT_PORTFOLIO_PAGE_DATA.id,
      createdAt: data.createdAt || this.DEFAULT_PORTFOLIO_PAGE_DATA.createdAt,
      updatedAt: data.updatedAt || this.DEFAULT_PORTFOLIO_PAGE_DATA.updatedAt,
      publishedAt:
        data.publishedAt || this.DEFAULT_PORTFOLIO_PAGE_DATA.publishedAt,
      projects: data.projects || this.DEFAULT_PORTFOLIO_PAGE_DATA.projects,
    };
  }

  private static DEFAULT_PORTFOLIO_PAGE_DATA: Required<PagePortfolio_Plain> = {
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    publishedAt: new Date(),
    projects: [],
  };

  private static DEFAULT_PORTFOLIO_PROJECT_DATA: Required<ProjectBriefInfo_Plain> =
    {
      projectName: "This is a mystery",
      projectDescription: "This is also another mystery",
      projectRelativeURL: "/portfolio",
      projectRelativeCtaContent: "NOT AVAILABLE",
      projectThumbnailURL:
        "https://res.cloudinary.com/dejteftxn/image/upload/v1736743752/Books_lyxqds.avif",
    };
}

export default PortfolioServices;
