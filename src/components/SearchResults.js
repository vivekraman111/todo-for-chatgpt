import React from "react";
import styles from "./SearchResults.module.css";

function SearchResults({ value }) {
  return (
    <main className={styles.wrapper}>
      <p>You searched for {value}</p>
    </main>
  );
}

export default SearchResults;
