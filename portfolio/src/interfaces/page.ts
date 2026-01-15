import { PageContact_Plain } from "./api/page-contact";
import { PageHome_Plain } from "./api/page-home";
import {
  PagePortfolio_Plain,
} from "./api/page-portfolio";
import { PagePortfolioDetail } from "./api/page-portfolio-details";

export interface IHomePageApi {
  data: PageHome_Plain;
}

export interface IContactPageApi {
  data: PageContact_Plain;
}

export interface IPortfolioPageApi {
  data: PagePortfolio_Plain;
}

export interface IPortfolioDetailsPageApi {
  data: PagePortfolioDetail[];
}
