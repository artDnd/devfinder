import { LocalGithubUser } from "../../types/user";

interface UserInfoProps
  extends Pick<LocalGithubUser, "location" | "twitter" | "company" | "blog"> {}

const UserInfo = ({ location, twitter, company, blog }: UserInfoProps) => {
  return (
    <div>
      <div>
        <span>{location}</span>
      </div>
      <div>
        <span>{twitter}</span>
      </div>
      <div>
        <span>{company}</span>
      </div>
      <div>
        <span>{blog}</span>
      </div>
    </div>
  );
};
export default UserInfo;
