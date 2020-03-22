import React,{useContext, useEffect} from 'react'
import {navigate} from '@reach/router'
import styles from './index.module.css'
import WelcomeInfo from './WelcomeInfo'
import AuthSection from './AuthSection'
import {AuthContext} from '../../contexts/AuthContext'

function LandPage(){
    const {currentUser} = useContext(AuthContext)

    useEffect(()=>{
        if(currentUser !== null){
            navigate('/app')
        }
    },[currentUser])
    
    return(
        <div className={styles.container}>
            <WelcomeInfo/>
            <AuthSection/>
        </div>
    )
}


export default LandPage