import { HomePage_Plain } from "@/interfaces/api/home-page";
import BaseServices from "./base.service";
import { HomePageApi } from "@/interfaces/page";

class HomeServices extends BaseServices {
  constructor() {
    super();
  }

  private static homePageUrl = this.apiBaseUrl + "/home-page?populate=*";

  static async getHomePageData() {
    const result = await this.handleGetRequest<HomePageApi>(this.homePageUrl);
    return {
      id: result.data.id || this.DEFAULT_HOME_PAGE_DATA.id,
      createdAt: result.data.createdAt || this.DEFAULT_HOME_PAGE_DATA.createdAt,
      updatedAt: result.data.updatedAt || this.DEFAULT_HOME_PAGE_DATA.updatedAt,
      publishedAt:
        result.data.publishedAt || this.DEFAULT_HOME_PAGE_DATA.publishedAt!,
      introHeading:
        result.data.introHeading || this.DEFAULT_HOME_PAGE_DATA.introHeading!,
      introImage:
        result.data.introImage || this.DEFAULT_HOME_PAGE_DATA.introImage!,
      introCtaUrl:
        result.data.introCtaUrl || this.DEFAULT_HOME_PAGE_DATA.introCtaUrl!,
      introCtaContent:
        result.data.introCtaContent ||
        this.DEFAULT_HOME_PAGE_DATA.introCtaContent!,
      aboutMeTitle:
        result.data.aboutMeTitle || this.DEFAULT_HOME_PAGE_DATA.aboutMeTitle!,
      aboutMeDescription:
        result.data.aboutMeDescription ||
        this.DEFAULT_HOME_PAGE_DATA.aboutMeDescription!,
      aboutMeImage:
        result.data.aboutMeImage || this.DEFAULT_HOME_PAGE_DATA.aboutMeImage!,
      aboutMeCtaUrl:
        result.data.aboutMeCtaUrl || this.DEFAULT_HOME_PAGE_DATA.aboutMeCtaUrl!,
      contactMeTitle:
        result.data.contactMeTitle ||
        this.DEFAULT_HOME_PAGE_DATA.contactMeTitle!,
      contactMeCtaUrl:
        result.data.contactMeCtaUrl ||
        this.DEFAULT_HOME_PAGE_DATA.contactMeCtaUrl!,
    };
  }

  private static DEFAULT_HOME_PAGE_DATA: HomePage_Plain = {
    id: 5,
    introHeading: "Hey, I'm Huy Phan, and I love building beautiful websites.",
    introCtaUrl: "#about-me",
    introCtaContent: "ABOUT ME",
    aboutMeTitle: "About Me",
    aboutMeDescription:
      "I am a software developer seeking a new opportunity with an exciting company. My focus is on creating accessible HTML, utilizing modern CSS practices, and writing clean JavaScript. While I primarily work with React for JavaScript development, I am adaptable and can work with various tools as needed. Based in London, UK, I have experience working in remote teams and am comfortable with remote work. Outside of coding, I enjoy spending time outdoors, whether it’s walking, running, or cycling. I would love for you to check out my work.",
    aboutMeCtaUrl: "",
    contactMeTitle: "Interested in doing a project together?",
    contactMeCtaUrl: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    publishedAt: new Date(),
    introImage: {
      id: 1,
      name: "Myself.jpg",
      alternativeText:
        "Young Asian man smiling in a brown polo shirt against a green background.",
      caption:
        "A friendly young Asian man smiles at the camera, wearing a brown polo shirt against a dark green backdrop.",
      width: 1321,
      height: 880,
      formats: {
        large: {
          ext: ".jpg",
          url: "/uploads/large_Myself_e5e57fede9.jpg",
          hash: "large_Myself_e5e57fede9",
          mime: "image/jpeg",
          name: "large_Myself.jpg",
          path: null,
          size: 46.71,
          width: 1000,
          height: 666,
          sizeInBytes: 46714,
        },
        small: {
          ext: ".jpg",
          url: "/uploads/small_Myself_e5e57fede9.jpg",
          hash: "small_Myself_e5e57fede9",
          mime: "image/jpeg",
          name: "small_Myself.jpg",
          path: null,
          size: 13.7,
          width: 500,
          height: 333,
          sizeInBytes: 13704,
        },
        medium: {
          ext: ".jpg",
          url: "/uploads/medium_Myself_e5e57fede9.jpg",
          hash: "medium_Myself_e5e57fede9",
          mime: "image/jpeg",
          name: "medium_Myself.jpg",
          path: null,
          size: 27.7,
          width: 750,
          height: 500,
          sizeInBytes: 27704,
        },
        thumbnail: {
          ext: ".jpg",
          url: "/uploads/thumbnail_Myself_e5e57fede9.jpg",
          hash: "thumbnail_Myself_e5e57fede9",
          mime: "image/jpeg",
          name: "thumbnail_Myself.jpg",
          path: null,
          size: 4.41,
          width: 234,
          height: 156,
          sizeInBytes: 4410,
        },
      },
      hash: "",
      ext: "",
      mime: "",
      size: 0,
      url: "",
      previewUrl: "",
      provider: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    aboutMeImage: {
      id: 1,
      name: "Myself.jpg",
      alternativeText:
        "Young Asian man smiling in a brown polo shirt against a green background.",
      caption:
        "A friendly young Asian man smiles at the camera, wearing a brown polo shirt against a dark green backdrop.",
      width: 1321,
      height: 880,
      formats: {
        large: {
          ext: ".jpg",
          url: "/uploads/large_Myself_e5e57fede9.jpg",
          hash: "large_Myself_e5e57fede9",
          mime: "image/jpeg",
          name: "large_Myself.jpg",
          path: null,
          size: 46.71,
          width: 1000,
          height: 666,
          sizeInBytes: 46714,
        },
        small: {
          ext: ".jpg",
          url: "/uploads/small_Myself_e5e57fede9.jpg",
          hash: "small_Myself_e5e57fede9",
          mime: "image/jpeg",
          name: "small_Myself.jpg",
          path: null,
          size: 13.7,
          width: 500,
          height: 333,
          sizeInBytes: 13704,
        },
        medium: {
          ext: ".jpg",
          url: "/uploads/medium_Myself_e5e57fede9.jpg",
          hash: "medium_Myself_e5e57fede9",
          mime: "image/jpeg",
          name: "medium_Myself.jpg",
          path: null,
          size: 27.7,
          width: 750,
          height: 500,
          sizeInBytes: 27704,
        },
        thumbnail: {
          ext: ".jpg",
          url: "/uploads/thumbnail_Myself_e5e57fede9.jpg",
          hash: "thumbnail_Myself_e5e57fede9",
          mime: "image/jpeg",
          name: "thumbnail_Myself.jpg",
          path: null,
          size: 4.41,
          width: 234,
          height: 156,
          sizeInBytes: 4410,
        },
      },
      hash: "Myself_e5e57fede9",
      ext: ".jpg",
      mime: "image/jpeg",
      size: 78.97,
      url: "/uploads/Myself_e5e57fede9.jpg",
      previewUrl: "",
      provider: "local",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  };
}

export default HomeServices;
