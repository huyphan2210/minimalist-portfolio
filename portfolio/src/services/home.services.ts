import { IPageHome } from "@/interfaces/api/page-home";
import BaseServices from "./base.services";
import { IHomePageApi } from "@/interfaces/page";

class HomeServices extends BaseServices {
  private static homePageUrl = this.apiBaseUrl + "/home-page?populate=*";

  static async getHomePageData(): Promise<Required<IPageHome>> {
    const { data } = await this.handleGetRequest<IHomePageApi>(
      this.homePageUrl
    );
    return this.enrich<IPageHome>(data, this.DEFAULT_HOME_PAGE_DATA);
  }

  private static DEFAULT_HOME_PAGE_DATA: Required<IPageHome> = {
    id: 5,
    introHeading: "Hey, I'm Huy Phan, and I love building beautiful websites.",
    introCtaUrl: "#about-me",
    introCtaContent: "ABOUT ME",
    aboutMeTitle: "About Me",
    aboutMeDescription:
      "I am a software developer seeking a new opportunity with an exciting company. My focus is on creating accessible HTML, utilizing modern CSS practices, and writing clean JavaScript. While I primarily work with React for JavaScript development, I am adaptable and can work with various tools as needed. Based in London, UK, I have experience working in remote teams and am comfortable with remote work. Outside of coding, I enjoy spending time outdoors, whether it’s walking, running, or cycling. I would love for you to check out my work.",
    aboutMeCtaUrl: "",
    aboutMeCtaContent: "CALL TO ACTION",
    createdAt: new Date(),
    updatedAt: new Date(),
    publishedAt: new Date(),
    introImageURL: "",
    aboutMeImageURL: "",
  };
}

export default HomeServices;
