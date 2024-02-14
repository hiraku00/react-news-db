import React from "react";
import { colors } from "./tabConfig";

interface TabProps {
  activeKeyword: string;
  setActiveKeyword: (keyword: string) => void;
  label: string;
  searchKeyword: string;
}

const Tab: React.FC<TabProps> = ({
  activeKeyword,
  setActiveKeyword,
  label,
  searchKeyword,
}) => {
  const isActive = activeKeyword === searchKeyword;
  const color = colors[label] || colors["default"];
  const classes = `cursor-pointer text-white pb-2 rounded p-1 flex-none text-center w-64 h-12`;

  return (
    <div
      onClick={() => setActiveKeyword(searchKeyword)}
      className={`${classes} ${isActive ? `h-14 mt-0 border-t-4 ${color.border}` : "h-12 mt-2 border-none"} ${color.background}`}
    >
      {label}
    </div>
  );
};

export default Tab;
