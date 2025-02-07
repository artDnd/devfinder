import { LocalGithubUser } from "../../types/user";
import UserInfo from "../UserInfo/UserInfo";
import { UserStats } from "../UserStats/UserStats";
import { UserTitle } from "../UserTitle/UserTitle";
import styles from "./UserCard.module.scss";

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
  const {
    name,
    avatar,
    login,
    created,
    bio,
    following,
    followers,
    repos,
    company,
    blog,
    twitter,
    location,
  } = props;

  return (
    <div className={styles.user}>
      <img className={styles.avatar} src={avatar} alt="avatar" />
      <div className={styles.card}>
        <UserTitle name={name} login={login} created={created} />
        <p className={styles.bio}>{bio}</p>
        <UserStats followers={followers} following={following} repos={repos} />
        <UserInfo
          location={location}
          twitter={twitter}
          company={company}
          blog={blog}
        />
      </div>
    </div>
  );
};
