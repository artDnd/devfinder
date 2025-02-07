import { LocalGithubUser } from "../../types/user";
import styles from "./UserStats.module.scss";
interface UserStatsProps extends LocalGithubUser {}
export const UserStats = (props: UserStatsProps) => {
  return (
    <div className={styles.stats}>
      <div className={styles.block}>
        <span>Repos</span>
        <b>{props.repos}</b>
      </div>
      <div className={styles.block}>
        <span>Following</span>
        <b>{props.following}</b>
      </div>
      <div className={styles.block}>
        <span>Followers</span>
        <b>{props.followers}</b>
      </div>
    </div>
  );
};
