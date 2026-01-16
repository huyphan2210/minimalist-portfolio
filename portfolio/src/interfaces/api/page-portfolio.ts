export interface IPagePortfolio {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  projects: Required<IProjectBriefInfo>[];
}

export interface IProjectBriefInfo {
  projectName?: string;
  projectDescription?: string;
  projectRelativeCtaContent?: string;
  projectThumbnailURL?: string;
}
