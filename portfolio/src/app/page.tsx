import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import HomeServices from "@/services/home.services";

const Home = async () => {
  const {
    introHeading,
    introImage,
    introCtaUrl,
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
          src={HomeServices.returnMediaFullURL(introImage.url)}
          loading="lazy"
          alt="Image - Image"
          width={introImage.width}
          height={introImage.height}
        ></Image>
        <h1 className={styles.home__intro__heading}>{introHeading}</h1>
        <Link href={introCtaUrl} title="Call to Action - Intro" />
      </section>
      <section>
        <Image
          src={HomeServices.returnMediaFullURL(aboutMeImage.url)}
          loading="lazy"
          alt="Image - About Me"
          width={aboutMeImage.width}
          height={aboutMeImage.height}
        ></Image>
        <h2>{aboutMeTitle}</h2>
        <p>{aboutMeDescription}</p>
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
