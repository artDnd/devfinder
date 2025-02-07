import { useState } from "react";
import styles from "./Search.module.scss";

export const Search = ({ fetchUser }: any) => {
  const [name, setName] = useState("");

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search GitHub username..."
        className={styles.input}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => fetchUser(name)} className={styles.btn}>
        Search
      </button>
    </div>
  );
};
