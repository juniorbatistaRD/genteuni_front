import React, {useContext} from 'react'
import {AuthContext} from '../../../contexts/AuthContext'
import Avatar from '../Avatar'
import styles from './AvatarNavBar.module.css'

function AvatarNavBar(){
    const {currentUser} = useContext(AuthContext)
    

    return(
        <Avatar className={styles.avatar}   image={currentUser.get('profilePicture') && currentUser.get('profilePicture').url()}/>
    )
}


export default AvatarNavBar