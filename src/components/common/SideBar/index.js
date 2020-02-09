import React, {useContext} from 'react'
import styles from './index.module.css'
import {AuthContext} from '../../../contexts/AuthContext'
import Avatar from '../Avatar'
import arrowIcon from '../../../assets/icons/arrow.svg'
import homeIcon from '../../../assets/icons/home-run.svg'
import chatIcon from '../../../assets/icons/comment.svg'
import communityIcon from '../../../assets/icons/discussion.svg'
import schoolIcon from '../../../assets/icons/school.svg'
import questionIcon from '../../../assets/icons/question.svg'
import loveIcon from '../../../assets/icons/love.svg'
import workIcon from '../../../assets/icons/work.svg'
import settingsIcon from '../../../assets/icons/settings.svg'
import SearchBar from '../SearchBar'


function SideBar({setMenuOpen, ...props}){
    const {currentUser} = useContext(AuthContext)
    
    return(
        <div className={styles.container}>
            {setMenuOpen && (

                <img src={arrowIcon} className={styles['close-button']} alt="close" onClick={() => {setMenuOpen(false)}}/>
            
            )}
           {currentUser && (
            <>
                <Avatar width="100px" className={styles.avatar} image={currentUser.get('profilePicture') && currentUser.get('profilePicture').url()}/>
                <span className={styles.username}>@{currentUser.attributes.username}</span>
            </>
            )}
            <SearchBar className={styles.searchbar}/>

            <ul className={styles.menu}>
                <li>
                    <img alt="option" className={styles['menu-icon']} src={homeIcon}/><span>Inicio</span>
                </li>
                <li>
                    <img alt="option" className={styles['menu-icon']} src={chatIcon}/><span>Chat</span>
                </li>
                <li>
                    <img alt="option" className={styles['menu-icon']} src={communityIcon}/><span>Comunidades</span>
                </li>
                <li>
                    <img alt="option" className={styles['menu-icon']} src={schoolIcon}/><span>Escuelas</span>
                </li>
                <li>
                    <img alt="option" className={styles['menu-icon']} src={questionIcon}/><span>Pregunta</span>
                </li>
                <li>
                    <img alt="option" className={styles['menu-icon']} src={loveIcon}/><span>UniCrush</span>
                </li>
                <li>
                    <img alt="option" className={styles['menu-icon']} src={workIcon}/><span>Trabajos</span>
                </li>
            </ul>

            <div className={styles.footer}>
                <div className={styles['settingsOption']}>
                    <img alt="option" className={styles['menu-icon']} src={settingsIcon}/>
                    <span>Adjustes</span>
                </div>
                <span>Contactanos!</span>
            </div>
        </div>
    )
}


export default SideBar