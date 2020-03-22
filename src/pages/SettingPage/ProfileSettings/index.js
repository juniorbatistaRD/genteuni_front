import React from "react";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import Title from "../../../components/common/Title";
import ProfileForm from "./ProfileForm";

function ProfileSetting() {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className={styles.container}
    >
      <Title text="Tu Perfil" className={styles.title} />
      <ProfileForm />
    </motion.div>
  );
}

export default ProfileSetting;
