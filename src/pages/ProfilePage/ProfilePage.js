import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./ProfilePage.module.css";
import CoverImage from "./components/CoverImage";
import Avatar from "../../components/common/Avatar";
import Button from "../../components/common/Button";
import { ReactComponent as BioIcon } from "../../assets/icons/feather.svg";
import { ReactComponent as StudentIcon } from "../../assets/icons/student.svg";
import { ReactComponent as PinIcon } from "../../assets/icons/pin.svg";
import Title from "../../components/common/Title";
import ItemWithIcon from "./components/ItemWithIcon";
import Views from "./components/Views";
import FollowButton from "../../components/FollowButton";
import Followers from "./components/Followers";
import Following from "./components/Following";
import MenuProfile from "./components/MenuProfile";
import PostSection from "./PostSection";
import CommentSection from "./CommentSection";
import GiftSection from "./GiftSection";
import CommunitySection from "./CommunitySection";
import ProfileTabMenu from "./components/ProfileTabMenu";

function ProfilePage({ user }) {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [user]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <CoverImage imageNumber={user.attributes.coverImage} />
        <div className={styles.infoTop}>
          <Avatar
            width="125px"
            className={styles.avatar}
            image={user.attributes.profilePicture?.url()}
          />
          <div className={styles.usernameInfoAndButtons}>
            <Title
              text={`@${user.attributes.username}`}
              typeStyle="secondary"
              fontSize="18px"
              className={styles.username}
            />
            {currentUser && currentUser.id !== user.id && (
              <div className={styles.buttons}>
                <FollowButton userToFollow={user} />

                <Button
                  typeStyle="secondary"
                  padding="5px 15px"
                  margin="0px 10px 0px 0px"
                >
                  Hablar
                </Button>
                <MenuProfile user={user} />
              </div>
            )}
          </div>
        </div>
        <div className={styles.infoBottom}>
          <div className={styles.stats}>
            <Views user={user} />
            <Followers user={user} onClick={() => navigate("followers")} />
            <Following user={user} onClick={() => navigate("following")} />
          </div>
          {user.attributes.bio && (
            <ItemWithIcon IconSVG={BioIcon} text={user.attributes.bio} />
          )}
          {user.attributes.school && (
            <ItemWithIcon
              IconSVG={StudentIcon}
              text={user.attributes.school.attributes.name}
            />
          )}

          {user.attributes.country && (
            <ItemWithIcon
              IconSVG={PinIcon}
              text={user.attributes.country.attributes.name}
            />
          )}
        </div>
      </div>
      <ProfileTabMenu />
      <div className={styles.contentContainer}>
        <Routes>
          <Route path="/" element={<PostSection />} />
          <Route path="/comments" element={<CommentSection user={user} />} />
          <Route path="/gifts" element={<GiftSection user={user} />} />
          <Route path="/communities" element={<CommunitySection />} />
        </Routes>
      </div>
    </div>
  );
}

export default ProfilePage;
