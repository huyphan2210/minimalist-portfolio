import LayoutHeader from "@/components/layout/header/header";
import { navigationList } from "@/common/navigationList";

export default function Home() {
  return (
    <>
      <LayoutHeader navigationList={navigationList}></LayoutHeader>
      <main></main>
      <footer></footer>
    </>
  );
}
