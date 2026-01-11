import { FC } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

import styles from "./page.module.scss";

import CustomImage from "@/components/CustomImage/CustomImage";

import PortfolioDetailsServices from "@/services/portfolio-details.service";

interface IPortfolioDetails {
  searchParams: Promise<{
    projectName?: string;
  }>;
}

const PorfolioDetails: FC<IPortfolioDetails> = async ({ searchParams }) => {
  const params = await searchParams;
  if (!params.projectName) {
    redirect("/portfolio");
  }

  const {
    projectHeroImgURL,
    projectTitle,
    projectDescription,
    projectCategories,
    projectTechnologies,
    projectLiveURL,
    projectCtaContent,
    projectBackgroundTitle,
    projectBackgroundDescription,
    projectStaticPreviewsTitle,
    projectPreviewImgURLs,
  } = await PortfolioDetailsServices.getPortfolioDetailPageData(
    params.projectName
  );

  return (
    <>
      <CustomImage
        className={styles["porfolio-details__hero-img"]}
        isLoadingClassName={styles["porfolio-details__hero-img--loading"]}
        src={projectHeroImgURL}
        alt={projectTitle}
        loading="lazy"
      />
      <section>
        <h1>{projectTitle}</h1>
        <p>{projectDescription}</p>
        {projectCategories.length > 0 && (
          <span>
            {projectCategories.map((category, index) =>
              index > 0 ? ` / ${category.content}` : category.content
            )}
          </span>
        )}
        {projectTechnologies.length > 0 && (
          <span>
            {projectTechnologies.map((tech, index) =>
              index > 0 ? ` / ${tech.content}` : tech.content
            )}
          </span>
        )}
        <Link href={projectLiveURL} target="_blank">
          {projectCtaContent}
        </Link>
      </section>
      <section>
        <h2>{projectBackgroundTitle}</h2>
        <p>{projectBackgroundDescription}</p>
      </section>
      <section>
        <h2>{projectStaticPreviewsTitle}</h2>
        {projectPreviewImgURLs.length > 0 &&
          projectPreviewImgURLs.map((url, index) => (
            <CustomImage
              key={index}
              // className={portfolio__projects__item__img}
              // isLoadingClassName={styles["portfolio__projects__item__img--loading"]}
              src={url.content || ""}
              alt={`${projectTitle} image`}
              loading="lazy"
            />
          ))}
      </section>
    </>
  );
};

export default PorfolioDetails;
