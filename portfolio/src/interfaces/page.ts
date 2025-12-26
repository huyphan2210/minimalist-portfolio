import { PageContact_Plain } from "./api/page-contact";
import { PageHome_Plain } from "./api/page-home";

export interface IHomePageApi {
  data: PageHome_Plain;
}

export interface IContactPageApi {
  data: PageContact_Plain;
}
