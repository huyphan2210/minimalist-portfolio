import { HomePage_Plain } from "@/interfaces/api/home-page";
import BaseServices from "./base.service";
import { IHomePageApi } from "@/interfaces/page";

class HomeServices extends BaseServices {
  private static homePageUrl = this.apiBaseUrl + "/home-page?populate=*";

  static async getHomePageData(): Promise<Required<HomePage_Plain>> {
    const { data } = await this.handleGetRequest<IHomePageApi>(
      this.homePageUrl
    );
    return {
      id: data.id || this.DEFAULT_HOME_PAGE_DATA.id,
      createdAt: data.createdAt || this.DEFAULT_HOME_PAGE_DATA.createdAt,
      updatedAt: data.updatedAt || this.DEFAULT_HOME_PAGE_DATA.updatedAt,
      publishedAt: data.publishedAt || this.DEFAULT_HOME_PAGE_DATA.publishedAt,
      introHeading:
        data.introHeading || this.DEFAULT_HOME_PAGE_DATA.introHeading,
      introImageURL:
        data.introImageURL || this.DEFAULT_HOME_PAGE_DATA.introImageURL,
      introCtaUrl: data.introCtaUrl || this.DEFAULT_HOME_PAGE_DATA.introCtaUrl,
      introCtaContent:
        data.introCtaContent || this.DEFAULT_HOME_PAGE_DATA.introCtaContent,
      aboutMeTitle:
        data.aboutMeTitle || this.DEFAULT_HOME_PAGE_DATA.aboutMeTitle,
      aboutMeDescription:
        data.aboutMeDescription ||
        this.DEFAULT_HOME_PAGE_DATA.aboutMeDescription,
      aboutMeImageURL:
        data.aboutMeImageURL || this.DEFAULT_HOME_PAGE_DATA.aboutMeImageURL,
      aboutMeCtaUrl:
        data.aboutMeCtaUrl || this.DEFAULT_HOME_PAGE_DATA.aboutMeCtaUrl,
      aboutMeCtaContent:
        data.aboutMeCtaContent || this.DEFAULT_HOME_PAGE_DATA.aboutMeCtaContent,
    };
  }

  private static DEFAULT_HOME_PAGE_DATA: Required<HomePage_Plain> = {
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
