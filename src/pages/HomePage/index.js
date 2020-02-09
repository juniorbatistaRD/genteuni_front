import React,{useContext} from 'react'
import styles from './index.module.css'
import {Router} from '@reach/router'
import {AuthContext} from '../../contexts/AuthContext'
import NavBar from '../../components/common/NavBar'
import SettingPage from '../SettingPage'
import ProfilePage from '../ProfilePage'

function HomePage(){
    const {currentUser} = useContext(AuthContext)

    return(
        <div className={styles.container}>
            <NavBar/>
            {currentUser ? 'Hi user'            
            : 'Go away!'}
            <Router>
                <ProfilePage path="profile"/>
                <SettingPage path="/setting"/>
            </Router>
        </div>
    )
}


export default HomePage