import { useState, useEffect } from "react";

import "./styles.css";

export type TabItems = {
  value: string;
  active: boolean;
};

interface TabsProps {
  data: TabItems[];
  handleSelectedTab: (value: string) => void;
  selectedTab: string;
}

export function Tabs({
  data = [],
  handleSelectedTab,
  selectedTab = ""
}: TabsProps) {
  const [currentTab, setCurrentTab] = useState<string>(selectedTab);

  const result = data.find((tab) => tab.active) as TabItems;

  useEffect(() => {
    if (result) {
      setCurrentTab(result.value);
    }
    // eslint-disable-react-hooks/exhaustive-deps
  }, []);

  const handleClick = (item: TabItems): void => {
    setCurrentTab(item.value);
    handleSelectedTab(item.value);
  };

  return (
    <div className="wrapper-tabs">
      <h1>componentes/Tabs/index.tsx</h1>

      <div className="tabs">
        {data.map((item) => (
          <span
            className={currentTab === item.value ? "active" : ""}
            onClick={() => handleClick(item)}
          >
            {item.value}
          </span>
        ))}
      </div>
    </div>
  );
}
