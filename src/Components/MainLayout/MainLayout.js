import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.mainContainer}>
      <Sidebar />
      <Header />
      <div className={styles.mainContent}>
        {/* Content as in whatever will be in Dashboard */}
      </div>
    </div>
  );
};

export default MainLayout;
