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
    params.projectName.toLocaleLowerCase()
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
      <div className={styles["porfolio-details__content"]}>
        <section className={styles["porfolio-details__content__intro-section"]}>
          <h1
            className={
              styles["porfolio-details__content__intro-section__page-heading"]
            }
          >
            {projectTitle}
          </h1>
          <p
            className={
              styles["porfolio-details__content__intro-section__project-desc"]
            }
          >
            {projectDescription}
          </p>
          <div
            className={
              styles["porfolio-details__content__intro-section__labels"]
            }
          >
            {projectCategories.length > 0 && (
              <span
                className={
                  styles[
                    "porfolio-details__content__intro-section__labels__categories"
                  ]
                }
              >
                {projectCategories.map((category, index) =>
                  index > 0 ? ` / ${category.content}` : category.content
                )}
              </span>
            )}
            {projectTechnologies.length > 0 && (
              <span
                className={
                  styles[
                    "porfolio-details__content__intro-section__labels__technologies"
                  ]
                }
              >
                {projectTechnologies.map((tech, index) =>
                  index > 0 ? ` / ${tech.content}` : tech.content
                )}
              </span>
            )}
          </div>

          <Link
            className={styles["porfolio-details__content__intro-section__cta"]}
            href={projectLiveURL}
            target="_blank"
          >
            {projectCtaContent}
          </Link>
        </section>
        <section className={styles["porfolio-details__content__section"]}>
          <h2 className={styles["porfolio-details__content__section__heading"]}>
            {projectBackgroundTitle}
          </h2>
          <p
            className={
              styles["porfolio-details__content__section__description"]
            }
          >
            {projectBackgroundDescription}
          </p>
        </section>
        <section className={styles["porfolio-details__content__section"]}>
          <h2
            className={`${styles["porfolio-details__content__section__heading"]} ${styles["porfolio-details__content__section__heading--static-previews"]}`}
          >
            {projectStaticPreviewsTitle}
          </h2>
          {projectPreviewImgURLs.length > 0 &&
            projectPreviewImgURLs.map((url, index) => (
              <CustomImage
                key={index}
                className={styles["porfolio-details__content__section__img"]}
                isLoadingClassName={
                  styles["porfolio-details__content__section__img--loading"]
                }
                src={url.content || ""}
                alt={`${projectTitle} image`}
                loading="lazy"
              />
            ))}
        </section>
      </div>
    </>
  );
};

export default PorfolioDetails;
