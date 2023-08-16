import styles from "./SidebarIcons.module.css";
import { Link, useLocation } from "react-router-dom";

const SidebarIcons = ({ icons }) => {
  const currentLocation = useLocation();
  return (
    <>
      {icons.map((icon, index) => (
        <Link
          key={index}
          to={icon.route}
          className={icon.route === currentLocation.pathname ? styles.activeIcon : styles.icon}
        >
          <img src={icon.iconSrc} alt={icon.alt} />
        </Link>
      ))}
    </>
  );
};

export default SidebarIcons;
