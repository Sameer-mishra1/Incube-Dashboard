import styles from "./Notifications.module.css";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";
const Notifications = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header />
        <h2>hello</h2>
      </div>
    </div>
  );
};

export default Notifications;
