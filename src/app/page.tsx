import {
  internalNavigationList,
  profileNavigationList,
} from "@/common/navigationList";

import LayoutHeader from "@/components/layout/header/header";
import LayoutFooter from "@/components/layout/footer/footer";

export default function Home() {
  return (
    <>
      <LayoutHeader navigationList={internalNavigationList}></LayoutHeader>
      <main></main>
      <LayoutFooter
        internalNavigationList={internalNavigationList}
        profileNavigationList={profileNavigationList}
      ></LayoutFooter>
    </>
  );
}
