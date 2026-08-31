import { useState, useEffect } from "react";

function GithubUser() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userName) return;
    async function fetchUser() {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();
      console.log(data);
      setUser(data);
    }
    fetchUser();
  }, [userName]);
  return (
    <div>
      <input
        value={userName}
        placeholder=" Enter username"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <button>Search</button>
      {user && <h2>{user.login}</h2>}
    </div>
  );
}

export default GithubUser;
