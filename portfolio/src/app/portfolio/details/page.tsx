import { FC } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

import styles from "./page.module.scss";

import CustomImage from "@/components/CustomImage/CustomImage";

import PortfolioDetailsServices from "@/services/portfolio-details.service";
import BaseServices from "@/services/base.services";

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
    projectDesignCtaContent,
    projectDesignUrl,
  } = await PortfolioDetailsServices.getPortfolioDetailPageData(
    params.projectName.toLocaleLowerCase(),
  );

  const pagination =
    await PortfolioDetailsServices.getPaginationForPortfolioDetails(
      params.projectName.toLocaleLowerCase(),
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
                  index > 0 ? ` / ${category.content}` : category.content,
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
                  index > 0 ? ` / ${tech.content}` : tech.content,
                )}
              </span>
            )}
          </div>
          <div
            className={styles["porfolio-details__content__intro-section__cta"]}
          >
            <Link
              className={
                styles["porfolio-details__content__intro-section__cta__link"]
              }
              href={projectLiveURL}
              target="_blank"
            >
              {projectCtaContent}
            </Link>
            {projectDesignUrl && (
              <Link
                className={
                  styles["porfolio-details__content__intro-section__cta__link"]
                }
                href={projectDesignUrl}
                target="_blank"
              >
                {projectDesignCtaContent}
              </Link>
            )}
          </div>
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
      {pagination && (
        <section className={styles["porfolio-details__pagination"]}>
          <div
            className={styles["porfolio-details__pagination__separate-line"]}
          ></div>
          <Link
            className={styles["porfolio-details__pagination__url"]}
            href={`/portfolio/details?projectName=${BaseServices.slugify(
              pagination.previous.projectTitle || "",
            )}`}
          >
            <svg
              width="10"
              height="17"
              viewBox="0 0 10 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.70715 0.353516L0.707153 8.35352L8.70715 16.3535"
                stroke="#33323D"
              />
            </svg>
            <div
              className={styles["porfolio-details__pagination__url__content"]}
            >
              <span>{pagination.previous.projectTitle}</span>
              <span>Previous Project</span>
            </div>
          </Link>
          <Link
            className={styles["porfolio-details__pagination__url"]}
            href={`/portfolio/details?projectName=${BaseServices.slugify(
              pagination.next.projectTitle || "",
            )}
              `}
          >
            <svg
              width="10"
              height="17"
              viewBox="0 0 10 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.353577 0.353516L8.35358 8.35352L0.353577 16.3535"
                stroke="#33323D"
              />
            </svg>
            <div
              className={styles["porfolio-details__pagination__url__content"]}
            >
              <span>{pagination.next.projectTitle}</span>
              <span>Next Project</span>
            </div>
          </Link>
        </section>
      )}
    </>
  );
};

export default PorfolioDetails;
