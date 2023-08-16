import Sidebar from "../Sidebar/Sidebar";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <>
    <div className={styles.container}>
      <Sidebar />
      </div>
    </>
  );
};

export default Dashboard;
