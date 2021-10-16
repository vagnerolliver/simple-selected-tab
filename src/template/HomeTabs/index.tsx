import { Tabs, TabItems } from "../../components/Tabs";

import "./styles.css";

interface HomeTabsProps {
  handleSelectedTab: (value: string) => void;
  selectedTab: string;
}

export function HomeTabs({ handleSelectedTab, selectedTab }: HomeTabsProps) {
  const data: TabItems[] = [
    {
      value: "Vantagens Black",
      active: true
    },
    {
      value: "CB PLAY",
      active: false
    }
  ];

  return (
    <div className="template-tabs">
      <h1>template/HomeTabs/index.tsx</h1>

      <Tabs
        data={data}
        selectedTab={selectedTab}
        handleSelectedTab={handleSelectedTab}
      />
    </div>
  );
}
