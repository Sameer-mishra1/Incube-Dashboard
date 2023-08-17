import styles from "./Sidebar.module.css";
import { useState } from "react";
import SidebarIcons from "./SidebarIcons/SidebarIcons";
import iconsArray from "./SidebarIcons/iconsArray";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
    console.log("collapsing...");
  };

  const icons = iconsArray.map((icon) => {
    if (icon.route === '/collapse') {
      icon.onClick = toggleCollapse;
    }
    return icon;
  });

  return (
    <>
      <div
        className={collapsed ? styles["sidebar"] : styles["sidebar__expanded"]}
      >
        <p
          className={
            collapsed
              ? styles["sidebar-logo"]
              : styles["sidebar__expanded-logo"]
          }
        >
          INCUBE
        </p>
        <SidebarIcons icons={icons} onCollapseToggle={toggleCollapse}/>
      </div>
    </>
  );
};

export default Sidebar;
