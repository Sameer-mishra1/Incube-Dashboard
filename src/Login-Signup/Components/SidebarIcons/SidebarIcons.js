import { useState } from "react";
import styles from "./SidebarIcons.module.css";
import { Link } from "react-router-dom";
import Icons from "../iconsArray";

const SidebarIcons = ({ Icons }) => {
  const [activeIcon, setActiveIcon] = useState(null);
  return (
    <>
      {icons.map((icon, index) => (
        <Link key={index}>
          <img
            src={icon.src}
            alt={icon.alt}
            className={activeIcon === icon ? "active" : ""}
            onClick={() => setActiveIcon(icon)}
          />
        </Link>
      ))}
    </>
  );
};

export default SidebarIcons;
