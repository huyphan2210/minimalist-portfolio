export interface ICommonNavigationList {
  pageTitle: string;
  url: string;
}

export const navigationList: ICommonNavigationList[] = [
  {
    pageTitle: "Home",
    url: "/",
  },
  {
    pageTitle: "Portfolio",
    url: "/portfolio",
  },
  {
    pageTitle: "Contact Me",
    url: "/contact-me",
  },
];
