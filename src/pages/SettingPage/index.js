import React from "react";
import styles from "./index.module.css";
import { Routes, Route } from "react-router-dom";
import SettingsMenu from "./SettingsMenu";
import ProfileSetting from "./ProfileSettings";
import PictureSetting from "./PictureSettings";
import PasswordSettings from "./PasswordSettings";
import FacebookSettings from "./FacebookSettings";
import SchoolSettings from "./SchoolSettings";
import AddSchool from "./AddSchool";
import CoverSettings from "./CoverSettings";

function SettingPage() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<SettingsMenu />} />
        <Route path="/profile" element={<ProfileSetting />} />
        <Route path="/picture" element={<PictureSetting />} />
        <Route path="/password" element={<PasswordSettings />} />
        <Route path="/facebook" element={<FacebookSettings />} />
        <Route path="/school" element={<SchoolSettings />} />
        <Route path="/school/add" element={<AddSchool />} />
        <Route path="/cover" element={<CoverSettings />} />
        {/* <SettingsMenu path="/" />
        <ProfileSetting path="/profile" />
        <PictureSetting path="/picture" />
        <PasswordSettings path="/password" />
        <FacebookSettings path="/facebook" />
        <SchoolSettings path="/school" />
        <AddSchool path="/addschool" />
        <CoverSettings path="/cover" /> */}
      </Routes>
    </div>
  );
}

export default SettingPage;
