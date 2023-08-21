import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search..."
      ></input>
    </div>
  );
};

export default SearchBar;
