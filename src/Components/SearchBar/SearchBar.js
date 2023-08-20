import styles from "./SearchBar.module.css";
import searchIcon from '../../assets/Icons/icons8-search.svg'

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
