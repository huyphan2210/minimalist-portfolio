import github from "../icons/github.svg";
import linkedIn from "../icons/linkedin.svg";

interface INavigationList {
  url: string;
}

export interface IInternalNavigation extends INavigationList {
  pageTitle: string;
}

export interface IProfileNavigation extends INavigationList {
  profileIcon: string;
}

export const internalNavigationList: IInternalNavigation[] = [
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

export const profileNavigationList: IProfileNavigation[] = [
  {
    profileIcon: github,
    url: "https://github.com/huyphan2210",
  },
  {
    profileIcon: linkedIn,
    url: "https://www.linkedin.com/in/huy-phan-7924aa25a/",
  },
];
