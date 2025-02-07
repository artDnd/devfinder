import { LocalGithubUser } from "../../types/user";
import styles from "./UserTitle.module.scss";

interface UserTitleProps
  extends Pick<LocalGithubUser, "name" | "login" | "created"> {}

export const UserTitle = ({ name, login, created }: UserTitleProps) => {
  return (
    <div className={styles.title}>
      <div className={styles.side}>
        <h2 className={styles.name}>{name}</h2>
        <span className={styles.login}>@{login}</span>
      </div>
      <span className={styles.created}>{created}</span>
    </div>
  );
};
