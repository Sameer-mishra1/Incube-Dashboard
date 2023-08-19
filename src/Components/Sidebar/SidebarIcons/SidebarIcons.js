import styles from "./SidebarIcons.module.css";
import { Link, useLocation } from "react-router-dom";

const SidebarIcons = ({ icons }) => {
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
          className={styles.icon}
          onClick={(event) => {
            if (icon.route === '/mail-us') {
              handleMailClick(event);
            }
          }}
        >
          <div className={styles.iconContent}>
            <div className={icon.route === currentLocation.pathname ? styles.iconContainerActive : styles.iconContainer}>
            <img src={icon.iconSrc} alt={icon.alt} title={icon.title} />
            </div>
            <span className={icon.route === currentLocation.pathname ? styles.iconTitleActive : styles.iconTitle}>{icon.title}</span>
          </div>
        </Link>
      ))}
    </>
  );
};

export default SidebarIcons;