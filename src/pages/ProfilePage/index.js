import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useParams } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import { getUserById } from "../../data/queryUsers";
import { saveView } from "../../data/queryViews";

function ProfilePageContainer() {
  const params = useParams();
  const { currentUser } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const addView = toUser => {
      if (currentUser && currentUser.id !== toUser.id) {
        saveView(currentUser, toUser);
      }
    };

    const userToFetch = params.user ? params.user : currentUser.id;
    getUserById(userToFetch).then(user => {
      setUserInfo(user);
      addView(user);
      setIsloading(false);
    });
  }, [currentUser, params.user]);

  return !isloading && <ProfilePage user={userInfo} />;
}

export default ProfilePageContainer;
