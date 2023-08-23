import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./MainLayout.module.css";

const MainLayout = (props) => {
  return (
    <div className={styles.mainContainer}>
      <Sidebar />
      <Header />
      <div className={styles.mainContent}>
        {props.children}
      </div>
    </div>
  );
};

export default MainLayout;
