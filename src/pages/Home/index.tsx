import { useState } from "react";

import { HomeTabs } from "../../template/HomeTabs";
import { HomeSearch } from "../../template/HomeSearch";

import "./styles.css";

export function Home() {
  const [currentTab, setCurrentTab] = useState<string>("");
  return (
    <div className="home">
      <h1>Página de Home</h1>
      <HomeTabs handleSelectedTab={setCurrentTab} selectedTab={currentTab} />
      <HomeSearch selectedTab={currentTab} />
    </div>
  );
}
