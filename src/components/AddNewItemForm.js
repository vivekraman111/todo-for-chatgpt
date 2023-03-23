import React from "react";
import styles from "./AddNewItemForm.module.css";

function AddNewItemForm({ handleNewItem }) {
  const [newItem, setNewItem] = React.useState("");

  return (
    <form
      className={styles.wrapper}
      onSubmit={(event) => {
        event.preventDefault();
        handleNewItem(newItem);
        setNewItem("");
      }}
    >
      <label className={styles.label} htmlFor="new-item">
        New item:
      </label>
      <div className={styles.row}>
        <input
          id="new-item"
          className={styles.newItem}
          type="text"
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
        />
        <button className={styles.add}>Add</button>
      </div>
    </form>
  );
}

export default AddNewItemForm;
