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
    if (params.user) {
      getUserById(params.user).then(user => {
        setUserInfo(user);
        setIsloading(false);
      });
    } else {
      setUserInfo(currentUser);
      setIsloading(false);
    }
  }, [currentUser, params.user]);

  return !isloading && <ProfilePage user={userInfo} />;
}

export default ProfilePageContainer;
