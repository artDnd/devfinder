import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1>devfinder</h1>

      <ThemeSwitcher />
    </div>
  );
};
