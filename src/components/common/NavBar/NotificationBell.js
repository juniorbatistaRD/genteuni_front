import React from 'react'
import styles from './NotificationBell.module.css'
import bellImg from '../../../assets/icons/notification.svg'

function NotificationBell() {

    return(
        <div>
            <img className={styles.bell} src={bellImg} alt="Notifications"/>
        </div>
    )
}



export default NotificationBell