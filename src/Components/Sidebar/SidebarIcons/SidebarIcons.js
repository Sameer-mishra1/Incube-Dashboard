import styles from "./SidebarIcons.module.css";
import { Link, useLocation } from "react-router-dom";

const SidebarIcons = ({ icons, onCollapseToggle }) => {
  const currentLocation = useLocation();

  const handleMailClick = (event) => {
    event.preventDefault();
    window.location.href = 'mailto:support@incube.club';
  }

  return (
    <>
      {icons.map((icon, index) => (
        <Link
          key={index}
          to={icon.route}
          className={icon.route === currentLocation.pathname ? styles.activeIcon : styles.icon}
          onClick={(event) => {
            if (icon.route === '/mail-us') {
              handleMailClick(event);
            } else if (icon.route === '/collapse') {
              event.preventDefault();
              onCollapseToggle();
            }
          }}
        >
          <img src={icon.iconSrc} alt={icon.alt} />
        </Link>
      ))}
    </>
  );
};

export default SidebarIcons;