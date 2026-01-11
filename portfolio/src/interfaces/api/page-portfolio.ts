export interface PagePortfolio_Plain {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  projects: Required<ProjectBriefInfo_Plain>[];
}

export interface ProjectBriefInfo_Plain {
  projectName?: string;
  projectDescription?: string;
  projectRelativeCtaContent?: string;
  projectThumbnailURL?: string;
}
