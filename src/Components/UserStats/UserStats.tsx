import { LocalGithubUser } from "../../types/user";
import styles from "./UserStats.module.scss";
interface UserStatsProps
  extends Pick<LocalGithubUser, "repos" | "following" | "followers"> {}
export const UserStats = ({ repos, following, followers }: UserStatsProps) => {
  return (
    <div className={styles.stats}>
      <div className={styles.block}>
        <span>Repos</span>
        <b>{repos}</b>
      </div>
      <div className={styles.block}>
        <span>Following</span>
        <b>{following}</b>
      </div>
      <div className={styles.block}>
        <span>Followers</span>
        <b>{followers}</b>
      </div>
    </div>
  );
};
