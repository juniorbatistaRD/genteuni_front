import React from 'react'
import styles from './index.module.css'
import {Router} from '@reach/router'
import SignUpForm from '../../../components/user/SignUpForm'
import LoginForm from '../../../components/user/LoginForm'
import CallToRegister from './CallToRegister'
import CallToLogin from './CallToLogin'
import hello from '../../../assets/images/hello.png'

function AuthSection(){
    return(
            <div className={styles.container}>
                <Router>
                    <Title path="/signup" title="Registrate"/>
                    <Title path="/" title="Inicia Sesion"/>
                </Router>

                <Router>
                    <SignUpForm path="/signup"/>
                    <LoginForm path="/"/>
                </Router>
                
                <Router className={styles.call_to_action}>
                    <CallToRegister path="/"/>
                    <CallToLogin path="/signup"/>
                </Router>

                <img src={hello} alt="welcome" className={styles.hello}/>
            </div>
    )
}

const Title = (props) => <h2 className={styles.title} > {props.title} </h2>


export default AuthSection