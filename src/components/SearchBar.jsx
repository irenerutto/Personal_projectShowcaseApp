import styles from "./SearchBar.module.css";

function SearchBar({ search, setSearch }) {
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search coffee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <button className={styles.button} onClick={() => setSearch("")}>
          Clear
        </button>
      )}
    </div>
  );
}

export default SearchBar;