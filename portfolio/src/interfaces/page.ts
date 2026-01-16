import { IPageContact } from "./api/page-contact";
import { IPageHome } from "./api/page-home";
import {
  IPagePortfolio,
} from "./api/page-portfolio";
import { IPagePortfolioDetail } from "./api/page-portfolio-details";

export interface IHomePageApi {
  data: IPageHome;
}

export interface IContactPageApi {
  data: IPageContact;
}

export interface IPortfolioPageApi {
  data: IPagePortfolio;
}

export interface IPortfolioDetailsPageApi {
  data: IPagePortfolioDetail[];
}
