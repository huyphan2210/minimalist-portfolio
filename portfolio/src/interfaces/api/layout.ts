export interface Navigation_Plain {
  displayName?: string;
  url?: string;
}

export interface Layout_Plain {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  navigations: Navigation_Plain[];
  contactMeHeading?: string;
  contactMeURL?: string;
  contactMeButtonContent?: string;
}
