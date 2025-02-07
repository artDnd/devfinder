import { LocalGithubUser } from "../../types/user";
import styles from "./UserTitle.module.scss";

interface UserTitleProps extends LocalGithubUser {}

export const UserTitle = (props: UserTitleProps) => {
  return (
    <div className={styles.title}>
      <div className={styles.side}>
        <h2 className={styles.name}>{props.name}</h2>
        <span className={styles.login}>@{props.login}</span>
      </div>
      <span className={styles.created}>{props.created}</span>
    </div>
  );
};
