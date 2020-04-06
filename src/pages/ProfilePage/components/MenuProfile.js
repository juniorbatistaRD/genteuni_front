import React, { useState } from "react";
import { ReactComponent as DotsIcon } from "../../../assets/icons/dot.svg";
import styles from "./MenuProfile.module.css";
import swal from "@sweetalert/with-react";
import SendGiftForm from "../GiftSection/SendGiftForm";

const MenuProfile = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(prevState => !prevState);
  };

  const sendGift = () => {
    setIsOpen(false);
    swal({
      buttons: false,
      content: <SendGiftForm user={user} />
    });
  };

  return (
    <div>
      <DotsIcon width="20px" height="20px" fill="#555" onClick={handleClick} />
      {isOpen && (
        <div className={styles.menuContainer}>
          <ul className={styles.menu}>
            <li onClick={sendGift}>Enviar Regalo</li>
            <li>Declarar Crush</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuProfile;
