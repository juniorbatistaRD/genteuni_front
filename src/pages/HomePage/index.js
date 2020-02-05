import React,{useContext} from 'react'
import styles from './index.module.css'
import {AuthContext} from '../../contexts/AuthContext'
import NavBar from '../../components/common/NavBar'

function HomePage(){
    const {currentUser} = useContext(AuthContext)

    return(
        <div className={styles.container}>
            <NavBar/>
            {currentUser ? 'Hi user'            
            : 'Go away!'}
        </div>
    )
}


export default HomePage