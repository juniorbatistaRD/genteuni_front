import React, {useContext, useState} from 'react'
import {AuthContext} from '../../../contexts/AuthContext'
import styles from './index.module.css'
import Avatar from '../Avatar'
import SideBar from '../SideBar'
import menuImg from '../../../assets/icons/menu.svg'
import NotificationBell from './NotificationBell'
import MessagesBell from './MessagesBell'
import SearchBar from '../SearchBar'
import Logo from '../Logo'


function NavBar(){
    const {currentUser} = useContext(AuthContext)
    const [isMenuOpen, setMenuOpen] = useState(false)

    return (
        <div className={styles.container}>

            <div className={styles['left-side']}>
                <Logo className={styles.logo}/>
                <img width="40px" className={styles['menu-button']} src={menuImg} onClick={() => setMenuOpen(!isMenuOpen)} alt="Menu"/>
                {isMenuOpen && (
                    <SideBar setMenuOpen={setMenuOpen}/>
                )}
            </div>

            <div className={styles['search-bar-container']}>
                <SearchBar/>
            </div>

            <div className={styles['right-side']}>
                {currentUser ? (
                    <>
                        <NotificationBell/>
                        <MessagesBell/>
                        <Avatar className={styles.avatar} image={currentUser.get('profilePicture') && currentUser.get('profilePicture').url()}/>
                    </>
                    ):
                    <span>Inicia Sesion!</span>
                    }
            </div>

        </div>
    )
}


export default NavBar


