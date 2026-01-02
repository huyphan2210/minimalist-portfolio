import githubLight from "../icons/github.svg";
import linkedInLight from "../icons/linkedin.svg";
import githubDark from "../icons/github-dark.svg";
import linkedInDark from "../icons/linkedin-dark.svg";

interface INavigationList {
  url: string;
}

export interface IInternalNavigation extends INavigationList {
  pageTitle: string;
}

export interface IProfileNavigation extends INavigationList {
  lightIcon: string;
  darkIcon: string;
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
    url: "/contact",
  },
];

export const profileNavigationList: IProfileNavigation[] = [
  {
    lightIcon: githubLight,
    darkIcon: githubDark,
    url: "https://github.com/huyphan2210",
  },
  {
    lightIcon: linkedInLight,
    darkIcon: linkedInDark,
    url: "https://www.linkedin.com/in/huy-phan-7924aa25a/",
  },
];
