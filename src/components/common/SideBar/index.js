import React, {useContext} from 'react'
import styles from './index.module.css'
import {AuthContext} from '../../../contexts/AuthContext'
import Avatar from '../Avatar'
import closeImg from '../../../assets/icons/close.svg'

function SideBar({setMenuOpen, ...props}){
    const {currentUser} = useContext(AuthContext)

    console.log(currentUser)
    
    return(
        <div className={styles.container}>
            {setMenuOpen && (

                <img src={closeImg} className={styles['close-button']} alt="close" onClick={() => {setMenuOpen(false)}}/>
            
            )}
           {currentUser && (
            <>
                <Avatar width="100px" className={styles.avatar} image={currentUser.get('profilePicture') && currentUser.get('profilePicture').url()}/>
                <span className={styles.username}>@{currentUser.attributes.username}</span>
            </>
            )}

            <ul className={styles.menu}>
                <li>
                    <img alt="option" className={styles['menu-icon']} src={closeImg}/><span>Uni Crush</span>
                </li>
                <li>
                    <img alt="option" className={styles['menu-icon']} src={closeImg}/><span>Chat</span>
                </li>
                <li>
                    <img alt="option" className={styles['menu-icon']} src={closeImg}/><span>Preguntas</span>
                </li>
                <li>
                    <img alt="option" className={styles['menu-icon']} src={closeImg}/><span>Profesores</span>
                </li>
            </ul>
        </div>
    )
}


export default SideBar