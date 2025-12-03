import HomeServices from "@/services/home.services";

export default async function Home() {
  const content = await HomeServices.getHomePageContent();
  return <>asdsad</>;
}
