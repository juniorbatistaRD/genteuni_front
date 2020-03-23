import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Parse from "parse";
import styles from "./index.module.css";
import Title from "../../../components/common/Title";
import SettingOption from "../SettingOption";
import profileIcon from "../../../assets/icons/profile.svg";
import cameraIcon from "../../../assets/icons/photograph.svg";
import keyIcon from "../../../assets/icons/key.svg";
import facebookIcon from "../../../assets/icons/facebook-out-line.svg";
import logoutIcon from "../../../assets/icons/logout.svg";
import { navigate } from "@reach/router";

function SettingsMenu() {
  const { setCurrentUser } = useContext(AuthContext);

  const logout = () => {
    Parse.User.logOut().then(async () => {
      await setCurrentUser(Parse.User.current());
      navigate("/");
    });
  };

  return (
    <div className={styles.container}>
      <Title className={styles.title} text="Adjustes" />

      <Title
        className={styles["secondary-title"]}
        text="Informacion Basica"
        typeStyle="secondary"
      />
      <SettingOption
        title="Perfil"
        description="Tu informacion de Perfil"
        icon={profileIcon}
        onClick={() => navigate("settings/profile")}
      />
      <SettingOption
        title="Foto de Perfil"
        description="Cambia tu foto de perfil"
        icon={cameraIcon}
        onClick={() => navigate("settings/picture")}
      />

      <Title
        className={styles["secondary-title"]}
        text="Tu Cuenta"
        typeStyle="secondary"
      />
      <SettingOption
        title="Contraseña"
        description="Cambia tu Contraseña"
        icon={keyIcon}
        onClick={() => navigate("settings/password")}
      />
      <SettingOption
        title="Facebook Login"
        description="Administra FaceBook Login"
        icon={facebookIcon}
        onClick={() => navigate("settings/facebook")}
      />
      <SettingOption
        title="Cerrar Sesion"
        description="Cierra sesion en este dipositivo"
        icon={logoutIcon}
        onClick={logout}
      />
    </div>
  );
}

export default SettingsMenu;
