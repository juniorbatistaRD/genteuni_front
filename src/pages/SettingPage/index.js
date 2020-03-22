import React from "react";
import styles from "./index.module.css";
import { Router } from "@reach/router";
import SettingsMenu from "./SettingsMenu";
import ProfileSetting from "./ProfileSettings";
import PictureSetting from "./PictureSettings";

function SettingPage() {
  return (
    <div className={styles.container}>
      <Router>
        <SettingsMenu path="/" />
        <ProfileSetting path="/profile" />
        <PictureSetting path="/picture" />
      </Router>
    </div>
  );
}

export default SettingPage;
