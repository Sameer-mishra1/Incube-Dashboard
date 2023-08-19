import styles from "./Sidebar.module.css";
import SidebarIcons from "./SidebarIcons/SidebarIcons";
import iconsArray from "./SidebarIcons/iconsArray";

const Sidebar = () => {

  const icons = iconsArray.map((icon) => {
    return icon;
  });

  return (
    <>
      <div
        className={styles["sidebar"]}
      >
        <p
          className={styles["sidebar-logo"]
          }
        >
          INCUBE
        </p>
        <SidebarIcons icons={icons} />
      </div>
    </>
  );
};

export default Sidebar;