import BaseServices from "./base.services";
import { IPortfolioDetailsPageApi } from "@/interfaces/page";
import { PagePortfolioDetail } from "@/interfaces/api/page-portfolio-details";

class PortfolioDetailsServices extends BaseServices {
  private static allProjects: PagePortfolioDetail[] = [];

  private static getPortfolioDetailsApiUrl(projectSlug: string) {
    return `${this.apiBaseUrl}/page-project-details?filters[slug][$eq]=${projectSlug}&populate=*`;
  }

  private static getPortfolioAllProjects() {
    return `${this.apiBaseUrl}/page-project-details`;
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

  static async getPaginationForPortfolioDetails(projectSlug: string): Promise<
    | {
        previous: PagePortfolioDetail;
        next: PagePortfolioDetail;
      }
    | undefined
  > {
    await this.getAllProjects();

    const targetProjectIndex = this.allProjects.findIndex(
      (p) => p.slug === projectSlug
    );
    if (targetProjectIndex === -1) {
      return;
    }

    const prevIndex =
      (targetProjectIndex - 1 + this.allProjects.length) %
      this.allProjects.length;
    const nextIndex = (targetProjectIndex + 1) % this.allProjects.length;

    return {
      previous: this.allProjects[prevIndex],
      next: this.allProjects[nextIndex],
    };
  }

  private static async getAllProjects(): Promise<void> {
    if (this.allProjects.length > 0) {
      return;
    }

    const { data } = await this.handleGetRequest<IPortfolioDetailsPageApi>(
      this.getPortfolioAllProjects()
    );

    this.allProjects = data;
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
