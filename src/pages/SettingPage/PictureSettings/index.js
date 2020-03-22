import React from "react";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import Title from "../../../components/common/Title";
import PictureForm from "./PictureForm";

function PictureSetting() {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className={styles.container}
    >
      <Title text="Tu Perfil" className={styles.title} />
      <PictureForm />
    </motion.div>
  );
}

export default PictureSetting;
