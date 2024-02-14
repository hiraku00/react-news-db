import React from "react";
import Tab from "./Tab";
import { colors, tabs } from "./tabConfig";

interface TabsProps {
  activeKeyword: string;
  setActiveKeyword: (keyword: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeKeyword, setActiveKeyword }) => {
  const colorKey = tabs.find(tab => tab.searchKeyword === activeKeyword)?.label || "default";
  const color = colors[colorKey] || colors["default"];
  const classes = `flex flex-nowrap justify-start mb-1 border-b-4 ${color.border} overflow-x-auto scrollbar-hide`;

  return (
    <div className={classes}>
      {tabs.map((tab) => (
        <Tab
          key={tab.searchKeyword}
          activeKeyword={activeKeyword}
          setActiveKeyword={setActiveKeyword}
          label={tab.label}
          searchKeyword={tab.searchKeyword}
        />
      ))}
    </div>
  );
};

export default Tabs;
