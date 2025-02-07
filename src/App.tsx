import { Header } from "./Components/Header/Header";
import { UserCard } from "./Components/UserCard/UserCard";
import styles from "./App.module.scss";
import { Search } from "./Components/Search/Search";
import { useState } from "react";
import { GithubError, GithubUser, LocalGithubUser } from "./types/user";
import { extractLocalUser } from "./utils/exractLocalUser";
import { isGithubUser } from "./utils/typeGuards";

const BASE_URL = "http://api.github.com/users/";

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>();
  const fetchUser = async (userName: string) => {
    const url = BASE_URL + userName;
    try {
      const res = await fetch(url);
      const user = (await res.json()) as GithubUser | GithubError;
      if (isGithubUser(user)) {
        setUser(extractLocalUser(user));
      } else {
        setUser(null);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  return (
    <div className={styles.container}>
      <Header />
      <Search fetchUser={fetchUser} />
      {user && <UserCard {...user} />}
    </div>
  );
}

export default App;
