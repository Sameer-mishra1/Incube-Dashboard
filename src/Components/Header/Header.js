import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.searchBarContainer}>
            <SearchBar />
        </div>
        <div className={styles.buttonContainer}>
          <Button>Analytics</Button>
          <Button>Research Reports</Button>
          <Button>Downloads</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
