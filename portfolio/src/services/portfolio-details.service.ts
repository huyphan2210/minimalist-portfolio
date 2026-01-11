import BaseServices from "./base.services";
import { IPortfolioDetailsPageApi } from "@/interfaces/page";
import { PagePortfolioDetail } from "@/interfaces/api/page-portfolio-details";

class PortfolioDetailsServices extends BaseServices {
  private static getPortfolioDetailsApiUrl(projectSlug: string) {
    return `${this.apiBaseUrl}/page-project-details?filters[slug][$eq]=${projectSlug}&populate=*`;
  }

  static async getPortfolioDetailPageData(
    projectSlug: string
  ): Promise<Required<PagePortfolioDetail>> {
    const { data } = await this.handleGetRequest<IPortfolioDetailsPageApi>(
      this.getPortfolioDetailsApiUrl(projectSlug)
    );

    return this.enrich<PagePortfolioDetail>(
      data[0],
      this.DEFAULT_PORTFOLIO_DETAILS_PAGE_DATA[0]
    );
  }

  private static DEFAULT_PORTFOLIO_DETAILS_PAGE_DATA: Required<
    PagePortfolioDetail[]
  > = [
    {
      id: 0,
      createdAt: new Date(0),
      updatedAt: new Date(0),
      projectTitle: "Coming Soon",
      projectDescription:
        "This is a placeholder project entry. Details will be added once the project is ready.",
      projectCategories: [{ content: "Placeholder" }],
      projectTechnologies: [{ content: "TBD" }],
      projectCtaContent: "Stay Tuned",
      projectBackgroundTitle: "Work in Progress",
      projectBackgroundDescription:
        "This portfolio item is intentionally left incomplete as a placeholder.",
      projectStaticPreviewsTitle: "Previews",
      projectPreviewImgURLs: [{ content: "" }],
      slug: "coming-soon",
      publishedAt: new Date(),
      projectHeroImgURL: "",
      projectLiveURL: "",
    },
  ];
}

export default PortfolioDetailsServices;
