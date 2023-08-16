import { useState } from "react";
import styles from "./SidebarIcons.module.css";
import { Link } from "react-router-dom";

const SidebarIcons = ({ icons }) => {
  const [activeIcon, setActiveIcon] = useState(null);
  return (
    <>
      {icons.map((icon, index) => (
        <Link
          key={index}
          to={icon.route}
          className={activeIcon === icon ? styles.activeIcon : styles.icon}
          onClick={() => setActiveIcon(icon)}
        >
          <img src={icon.iconSrc} alt={icon.alt} />
        </Link>
      ))}
    </>
  );
};

export default SidebarIcons;
