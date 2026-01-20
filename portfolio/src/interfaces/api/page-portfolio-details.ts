export interface IPagePortfolioDetail {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  projectHeroImgURL?: string;
  projectTitle?: string;
  projectDescription?: string;
  projectCategories: IString[];
  projectTechnologies: IString[];
  projectLiveURL?: string;
  projectCtaContent?: string;
  projectDesignUrl?: string;
  projectDesignCtaContent?: string;
  projectBackgroundTitle?: string;
  projectBackgroundDescription?: string;
  projectStaticPreviewsTitle?: string;
  projectPreviewImgURLs: IString[];
  slug?: string;
}

export interface IString {
  content?: string;
}
