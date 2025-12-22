import { Media_Plain } from "../common/Media";

export interface HomePage_Plain {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  introHeading?: string;
  introImage?: Media_Plain;
  introCtaUrl?: string;
  introCtaContent?: string;
  aboutMeTitle?: string;
  aboutMeDescription?: string;
  aboutMeImage?: Media_Plain;
  aboutMeCtaUrl?: string;
  aboutMeCtaContent?: string;
}
