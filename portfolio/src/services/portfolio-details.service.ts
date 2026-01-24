import BaseServices from "./base.services";
import { IPortfolioDetailsPageApi } from "@/interfaces/page";
import { IPagePortfolioDetail } from "@/interfaces/api/page-portfolio-details";

class PortfolioDetailsServices extends BaseServices {
  private static allProjects: IPagePortfolioDetail[] = [];

  private static getPortfolioAllProjects() {
    return `${this.apiBaseUrl}/page-project-details?populate=*`;
  }

  static async getPortfolioDetailPageData(
    projectSlug: string,
  ): Promise<Required<IPagePortfolioDetail>> {
    await this.getAllProjects();

    const projectDetail = this.allProjects.find(
      (project) => project.slug === projectSlug,
    ) || this.DEFAULT_PORTFOLIO_DETAILS_PAGE_DATA[0];

    return this.enrich<IPagePortfolioDetail>(
      projectDetail,
      this.DEFAULT_PORTFOLIO_DETAILS_PAGE_DATA[0],
    );
  }

  static async getPaginationForPortfolioDetails(projectSlug: string): Promise<
    | {
        previous: IPagePortfolioDetail;
        next: IPagePortfolioDetail;
      }
    | undefined
  > {
    await this.getAllProjects();

    const targetProjectIndex = this.allProjects.findIndex(
      (p) => p.slug === projectSlug,
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
      this.getPortfolioAllProjects(),
    );

    this.allProjects = data;
  }

  private static DEFAULT_PORTFOLIO_DETAILS_PAGE_DATA: Required<
    IPagePortfolioDetail[]
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
      projectDesignCtaContent: "Stay Tuned",
      projectBackgroundTitle: "Work in Progress",
      projectBackgroundDescription:
        "This portfolio item is intentionally left incomplete as a placeholder.",
      projectStaticPreviewsTitle: "Previews",
      projectPreviewImgURLs: [{ content: "" }],
      slug: "coming-soon",
      publishedAt: new Date(),
      projectHeroImgURL: "",
      projectLiveURL: "",
      projectDesignUrl: "",
    },
  ];
}

export default PortfolioDetailsServices;
