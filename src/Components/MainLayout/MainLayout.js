import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./MainLayout.module.css";

const MainLayout = (props) => {
  return (
    <div className={styles.contentContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
      <Header />
        {props.children}
      </div>
    </div>
  );
};

export default MainLayout;
