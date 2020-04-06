import React, { useEffect, useState } from "react";
import Stat from "./Stat";
import { getFollowersNumber } from "../../../data/queryFollows";

function Followers({ user }) {
  const [followers, setFollowers] = useState();

  useEffect(() => {
    getFollowersNumber(user).then(data => setFollowers(data));
  }, [user]);

  return (
    <>
      <Stat text="Seguidores" number={followers}></Stat>
    </>
  );
}

export default Followers;
