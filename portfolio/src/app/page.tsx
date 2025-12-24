import Image from "next/image";
import Link from "next/link";

import goDownIcon from "../icons/go-down.svg";

import styles from "./page.module.scss";
import HomeServices from "@/services/home.services";
import CustomImage from "@/components/CustomImage/CustomImage.module";

const Home = async () => {
  const {
    introHeading,
    introImage,
    introCtaUrl,
    introCtaContent,
    aboutMeTitle,
    aboutMeDescription,
    aboutMeImage,
    aboutMeCtaUrl,
    aboutMeCtaContent,
  } = await HomeServices.getHomePageData();

  return (
    <>
      <section className={styles.home__intro}>
        <CustomImage
          className={styles.home__intro__img}
          isLoadingClassName={styles["home__intro__img--loading"]}
          src={HomeServices.returnMediaFullURL(introImage.url)}
          loading="lazy"
          alt="Image - Image"
          width={introImage.width}
          height={introImage.height}
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
      <section id={introCtaUrl} className={styles["home__about-me"]}>
        <CustomImage
          className={styles["home__about-me__img"]}
          isLoadingClassName={styles["home__about-me__img--loading"]}
          src={HomeServices.returnMediaFullURL(aboutMeImage.url)}
          alt="Image - About Me"
          loading="lazy"
          width={aboutMeImage.width}
          height={aboutMeImage.height}
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
