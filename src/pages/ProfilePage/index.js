import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useParams } from "@reach/router";
import ProfilePage from "./ProfilePage";
import { getUserById } from "../../data/queryUsers";

function ProfilePageContainer() {
  const params = useParams();
  const { currentUser } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const userToFetch = params.user ? params.user : currentUser.id;
    getUserById(userToFetch).then(user => {
      setUserInfo(user);
      setIsloading(false);
    });
  }, [currentUser, params.user]);

  return !isloading && <ProfilePage user={userInfo} />;
}

export default ProfilePageContainer;
