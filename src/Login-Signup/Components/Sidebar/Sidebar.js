import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import googleIcon from "../../../assets/icons8-google.svg";
import dashboardIcon from "../../../assets/dashboard-icon.svg";
import { useState } from "react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
    console.log("collapsing...");
  };

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
        <Link className={styles["sidebar-icon"]} to="/dashboard">
          <img className={styles['sidebar-icon__active']} src={dashboardIcon} />
        </Link>
        <Link className={styles["sidebar-icon"]} to="/scout">
          <img src={googleIcon} />
        </Link>
        <Link className={styles["sidebar-icon"]} to="/events">
          <img src={googleIcon} />
        </Link>
        <Link className={styles["sidebar-icon"]} to="/cohort-applications">
          <img src={googleIcon} />
        </Link>
        <Link className={styles["sidebar-icon"]} to="/live-deals">
          <img src={googleIcon} />
        </Link>
        <Link className={styles["sidebar-icon"]} to="/team">
          <img src={googleIcon} />
        </Link>
        <Link className={styles["sidebar-icon"]} to="/portfolio">
          <img src={googleIcon} />
        </Link>
        <Link className={styles["sidebar-icon"]} to="/notifications">
          <img src={googleIcon} />
        </Link>
        <Link className={styles["sidebar-icon"]} to="/mail-us">
          <img
            src={googleIcon}
            onClick={() =>
              (window.location.href = "mailto:support@incube.club")
            }
          />
        </Link>
        {/* Collapse - Expand Button */}
        <button className={styles["sidebar-icon"]} onClick={toggleCollapse}>
          <img src={googleIcon} />
        </button>
        <Link className={styles["sidebar-icon"]} to="/user-Profile">
          <img src={googleIcon} />
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
