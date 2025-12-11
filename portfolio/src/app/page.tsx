import HomeServices from "@/services/home.services";

export default async function Home() {
  const content = await HomeServices.getHomePageData();
  return (
    <>
      <h1>{content.introHeading}</h1>
    </>
  );
}
