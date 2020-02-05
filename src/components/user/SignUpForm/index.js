import React, {useContext} from 'react'
import Parse from 'parse'
import InputField from '../../common/InputField'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import Button from '../../common/Button'
import styles from './index.module.css'
import FacebookLogin from '../FacebookLogin'
import ErrorMessageInput from '../../common/InputField/ErrorMessageInput'
import CheckBox from '../../common/InputField/CheckBox'
import {AuthContext} from '../../../contexts/AuthContext'
import showAlert from '../../../helpers/showAlert/showAlert'

function SignUpForm (){
    const { setCurrentUser} = useContext(AuthContext)
    return(
        <div className={styles.container}>
            <Formik
                initialValues={{
                    username:'',
                    email:'',
                    password:'',
                    terms: false
                }}

                validationSchema={Yup.object({
                    
                    username: Yup.string()
                    .min('6', 'Tu nombre de usuario debe de ser mayor de 6 caracteres')
                    .max('15', 'Tu nombre de usuario es demasiado largo')
                    .required('Tu nombre es re-querido'),
                    
                    email: Yup.string()
                    .email('Correo invalido')
                    .required('Correo requerido'),

                    password: Yup.string()
                    .min(6, 'Codigo secreto muy corto')
                    .required('Se te elvido tu codigo secreto'),

                    terms: Yup.boolean()
                    .required()
                    .oneOf([true], 'Debes aceptar los terminos y condiciones'),

                    
                })}

                onSubmit={async (values) => {
                    const user = new Parse.User();
                    user.set("username", values.username);
                    user.set("password", values.password);
                    user.set("email", values.email);
                    try {
                        await user.signUp();
                        setCurrentUser(Parse.User.current())
                        showAlert({title:'Usuario Creado!', text:'Te enviamos un correo para verificar tu cuenta', type:'success'})
                      
                    } catch (error) {
                        // Show the error message  and let the user try again.
                        var message;                        
                        switch(error.code){
                            case 202: 
                                message = 'Este nombre de usuario ya esta en uso.'
                                break;
                            case 203:
                                message = 'Ya existe una cuenta con este email'
                                break;

                            default: message = `Hubo un error, ${error.message} contactanos para ayudarte!`
                            
                        }   
                        showAlert({title:'Oh no!', text:`${message}`, type:'error'})
                      }
                  }}
            >
                {props => (
                    <Form className={styles.form}>
                        <InputField
                            placeholder="Username" 
                            name="username"
                        />
                        <ErrorMessageInput name="username"/>
                        <InputField
                            placeholder="Tu correo" 
                            name="email"
                            type="email"
                        />
                        <ErrorMessageInput name="email"/>
                        <InputField
                            placeholder="Tu codigo secreto" 
                            name="password"
                            type="password"
                        />
                        <ErrorMessageInput name="password"/>
                        <CheckBox name="terms" className={styles.check_box}><span className={styles.terms_text}>Acepto los terminos y condiciones</span></CheckBox>
                        <ErrorMessageInput name="terms"/>
                        <div className={styles.btns_container}>
                        <FacebookLogin className={styles.facebook_button}/>
                        <Button className={styles.submit_button} loading={props.isSubmitting}  typeStyle="primary"  type="submit" >Vamo' alla</Button>
                    </div>
                </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignUpForm