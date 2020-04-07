import React from "react";
import styles from "./Gift.module.css";
import Avatar from "../../../components/common/Avatar";

const Gift = ({ image, fromUser, text }) => {
  console.log(fromUser);
  return (
    <div className={styles.container}>
      <img src={image} alt="Gift" className={styles.image} />
      <Avatar
        image={fromUser.attributes.profilePicture?.url()}
        className={styles.avatar}
        link={fromUser.id}
      />
      <span className={styles.arrow} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Gift;
