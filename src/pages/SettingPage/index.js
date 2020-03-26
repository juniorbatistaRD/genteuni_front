import React from "react";
import styles from "./index.module.css";
import { Router } from "@reach/router";
import SettingsMenu from "./SettingsMenu";
import ProfileSetting from "./ProfileSettings";
import PictureSetting from "./PictureSettings";
import PasswordSettings from "./PasswordSettings";
import FacebookSettings from "./FacebookSettings";
import SchoolSettings from "./SchoolSettings";

function SettingPage() {
  return (
    <div className={styles.container}>
      <Router>
        <SettingsMenu path="/" />
        <ProfileSetting path="/profile" />
        <PictureSetting path="/picture" />
        <PasswordSettings path="/password" />
        <FacebookSettings path="/facebook" />
        <SchoolSettings path="/school" />
      </Router>
    </div>
  );
}

export default SettingPage;
