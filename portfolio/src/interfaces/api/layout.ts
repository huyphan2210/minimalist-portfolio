export interface INavigation {
  displayName?: string;
  url?: string;
}

export interface ILayout {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  navigations: INavigation[];
  contactMeHeading?: string;
  contactMeURL?: string;
  contactMeButtonContent?: string;
}
