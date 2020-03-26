import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./ProfilePage.module.css";
import CoverImage from "./components/CoverImage";
import Avatar from "../../components/common/Avatar";
import Button from "../../components/common/Button";
import Stat from "./components/Stat";
import { ReactComponent as BioIcon } from "../../assets/icons/feather.svg";
import { ReactComponent as DotsIcon } from "../../assets/icons/dot.svg";
import { ReactComponent as StudentIcon } from "../../assets/icons/student.svg";
import { ReactComponent as PinIcon } from "../../assets/icons/pin.svg";
import Title from "../../components/common/Title";
import ItemWithIcon from "./components/ItemWithIcon";

function ProfilePage({ user }) {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <CoverImage />
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
                <Button padding="5px 15px" margin="0px 10px">
                  Seguir
                </Button>
                <Button
                  typeStyle="secondary"
                  padding="5px 15px"
                  margin="0px 10px 0px 0px"
                >
                  Hablar
                </Button>
                <DotsIcon width="20px" height="20px" fill="#555" />
              </div>
            )}
          </div>
        </div>
        <div className={styles.infoBottom}>
          <div className={styles.stats}>
            <Stat text="Views" number="120" />
            <Stat text="Seguidores" number="20" />
            <Stat text="Siguiendo" number="0" />
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

          <div className={styles.menu}>
            <ul>
              <li className={`${styles.menuOption} ${styles.menuOptionActive}`}>
                Posts
              </li>
              <li className={styles.menuOption}>Comentarios</li>
              <li className={styles.menuOption}>Regalos</li>
              <li className={styles.menuOption}>Comunidades</li>
            </ul>
          </div>
        </div>
      </div>
      profile
    </div>
  );
}

export default ProfilePage;
