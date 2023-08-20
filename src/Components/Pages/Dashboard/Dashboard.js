import Header from "../../Header/Header";
import Sidebar from "../../Sidebar/Sidebar";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
        <Header />
      <div className={styles.mainContent}>
      {/* Content as in whatever will be in Dashboard */}
      </div>
    </div>
  );
};

export default Dashboard;
