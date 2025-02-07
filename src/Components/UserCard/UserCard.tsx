import { LocalGithubUser } from "../../types/user";
import { UserStats } from "../UserStats/UserStats";
import { UserTitle } from "../UserTitle/UserTitle";
import styles from "./UserCard.module.scss";

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
  const { name, avatar, login, created, bio, following, followers, repos } =
    props;

  return (
    <div className={styles.user}>
      <img className={styles.avatar} src={props.avatar} alt="avatar" />
      <div className={styles.card}>
        <UserTitle
          name={name}
          avatar={avatar}
          login={login}
          created={created}
        />
        <p className={styles.bio}>{bio}</p>
        <UserStats followers={followers} following={following} repos={repos} />
      </div>
    </div>
  );
};
