import { FC } from "react";
import styles from "./page.module.scss";
import PortfolioServices from "@/services/portfolio.service";
import CustomImage from "@/components/CustomImage/CustomImage";
import Link from "next/link";

const Portfolio: FC = async () => {
  const { projects } = await PortfolioServices.getPortfolioPageData();
  const {
    portfolio__heading,
    portfolio__projects,
    portfolio__projects__item,
    portfolio__projects__item__img,
    portfolio__projects__item__content,
    portfolio__projects__item__content__title,
    portfolio__projects__item__content__description,
    portfolio__projects__item__content__cta,
  } = styles;
  return (
    <>
      <h1 className={portfolio__heading}>Portfolio</h1>
      <ul className={portfolio__projects}>
        {projects.map(
          (
            {
              projectName,
              projectThumbnailURL,
              projectDescription,
              projectRelativeCtaContent,
              projectRelativeURL,
            },
            index
          ) => (
            <li key={index} className={portfolio__projects__item}>
              <CustomImage
                className={portfolio__projects__item__img}
                isLoadingClassName={
                  styles["portfolio__projects__item__img--loading"]
                }
                src={projectThumbnailURL}
                alt={projectName}
                loading="lazy"
              />
              <div className={portfolio__projects__item__content}>
                <h2 className={portfolio__projects__item__content__title}>
                  {projectName}
                </h2>
                <p className={portfolio__projects__item__content__description}>
                  {projectDescription}
                </p>
                <Link
                  className={portfolio__projects__item__content__cta}
                  href={projectRelativeURL}
                >
                  {projectRelativeCtaContent}
                </Link>
              </div>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Portfolio;
