import styles from "./Sidebar.module.css";
import { useState } from "react";
import SidebarIcons from "./SidebarIcons/SidebarIcons";
import iconsArray from "./SidebarIcons/iconsArray";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleIconClick = () => {
    if (collapsed) {
      setCollapsed(false);
      console.log('expanding...');
    }
  }

  const icons = iconsArray.map((icon) => {
    if (icon.route === '/collapse') {
      icon.onClick = toggleCollapse;
    } else {
      icon.onClick = handleIconClick;
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