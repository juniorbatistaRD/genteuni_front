import React from 'react'
import { navigate } from "@reach/router"
import styles from './CallToAction.module.css'
import Button from '../../../components/common/Button'

function CallToLogin(){
    
    return(
        <div className={styles.container}>
            <p>¿Ya tienes cuenta?</p>
                <Button typeStyle="primary" onClick={()=> navigate('/')}>Inicia Sesion</Button>
        </div>
    )
}

export default CallToLogin