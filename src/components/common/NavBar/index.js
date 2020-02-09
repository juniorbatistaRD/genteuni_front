import React, {useContext} from 'react'
import {AuthContext} from '../../../contexts/AuthContext'
import styles from './index.module.css'
import NotificationBell from './NotificationBell'
import MessagesBell from './MessagesBell'
import SearchBar from '../SearchBar'
import Logo from '../Logo'
import AvatarNavBar from './AvatarNavBar'
import MenuButton from '../MenuButton'


function NavBar(){
    const {currentUser} = useContext(AuthContext)

    return (
        <div className={styles.container}>

            <div className={styles['left-side']}>
                <Logo className={styles.logo}/>
                <MenuButton/>
            </div>

            <div className={styles['search-bar-container']}>
                <SearchBar/>
            </div>

            <div className={styles['right-side']}>
                {currentUser ? (
                    <>
                        <NotificationBell/>
                        <MessagesBell/>
                        <AvatarNavBar/>
                    </>
                    ):
                    <span>Inicia Sesion!</span>
                    }
            </div>

        </div>
    )
}


export default NavBar


