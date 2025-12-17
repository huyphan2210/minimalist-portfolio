import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import HomeServices from "@/services/home.services";

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
    contactMeTitle,
    contactMeCtaUrl,
  } = await HomeServices.getHomePageData();

  return (
    <>
      <section className={styles.home__intro}>
        <Image
          className={styles.home__intro__img}
          src={HomeServices.returnMediaFullURL(introImage.url)}
          loading="lazy"
          alt="Image - Image"
          width={introImage.width}
          height={introImage.height}
        ></Image>
        <h1 className={styles.home__intro__heading}>{introHeading}</h1>
        <Link href={introCtaUrl} title="Call to Action - Intro">
          {introCtaContent}
        </Link>
      </section>
      <section className={styles["home__about-me"]}>
        <Image
          className={styles["home__about-me__img"]}
          src={HomeServices.returnMediaFullURL(aboutMeImage.url)}
          loading="lazy"
          alt="Image - About Me"
          width={aboutMeImage.width}
          height={aboutMeImage.height}
        ></Image>
        <h2 className={styles["home__about-me__heading"]}>{aboutMeTitle}</h2>
        <p className={styles["home__about-me__paragraph"]}>{aboutMeDescription}</p>
        <Link href={aboutMeCtaUrl} title="Call to Action - Contact Me" />
      </section>
      <section>
        <h2>{contactMeTitle}</h2>
        <Link href={contactMeCtaUrl} title="Call to Action - Contact Me" />
      </section>
    </>
  );
};

export default Home;
