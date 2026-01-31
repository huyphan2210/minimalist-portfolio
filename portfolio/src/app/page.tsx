import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import CustomImage from "@/components/CustomImage/CustomImage";

import styles from "./page.module.scss";
import goDownIcon from "../icons/go-down.svg";

import HomeServices from "@/services/home.services";

const Home: FC = async () => {
  const {
    introHeading,
    introImageURL,
    introCtaUrl,
    introCtaContent,
    aboutMeTitle,
    aboutMeDescription,
    aboutMeImageURL,
    aboutMeCtaUrl,
    aboutMeCtaContent,
  } = await HomeServices.getHomePageData();

  return (
    <>
      <section className={styles.home__intro}>
        <CustomImage
          className={styles.home__intro__img}
          isLoadingClassName={styles["home__intro__img--loading"]}
          src={introImageURL}
          loading="lazy"
          alt="Image - Image"
          width={400}
          height={400}
        ></CustomImage>
        <div className={styles.home__intro__content}>
          <h1 className={styles.home__intro__content__heading}>
            {introHeading}
          </h1>
          <Link
            className={styles.home__intro__content__cta}
            href={introCtaUrl}
            title="Call to Action - Intro"
          >
            <div className={styles.home__intro__content__cta__image}>
              <Image src={goDownIcon} loading="lazy" alt="Going Down Icon" />
            </div>
            <span>{introCtaContent}</span>
          </Link>
        </div>
      </section>
      <section id={introCtaUrl.substring(1)} className={styles["home__about-me"]}>
        <CustomImage
          className={styles["home__about-me__img"]}
          isLoadingClassName={styles["home__about-me__img--loading"]}
          src={aboutMeImageURL}
          alt="Image - About Me"
          loading="lazy"
          width={400}
          height={400}
        ></CustomImage>
        <div className={styles["home__about-me__content"]}>
          <h2 className={styles["home__about-me__content__heading"]}>
            {aboutMeTitle}
          </h2>
          <p className={styles["home__about-me__content__paragraph"]}>
            {aboutMeDescription}
          </p>
          <Link
            className={styles["home__about-me__content__cta"]}
            href={aboutMeCtaUrl}
            title="Call to Action - Contact Me"
          >
            {aboutMeCtaContent}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
