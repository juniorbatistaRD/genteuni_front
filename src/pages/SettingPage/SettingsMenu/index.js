import React from "react";
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
      />
      <SettingOption
        title="Facebook Login"
        description="Enlaza tu Cuenta de FaceBook"
        icon={facebookIcon}
      />
      <SettingOption
        title="Cerrar Sesion"
        description="Cierra sesion en este dipositivo"
        icon={logoutIcon}
      />
    </div>
  );
}

export default SettingsMenu;
