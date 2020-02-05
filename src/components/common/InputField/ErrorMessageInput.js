import React from 'react'
import { connect, getIn } from 'formik';
import styles from './ErrorMessage.module.css'

function ErrorMessageInput(props){
    const error = getIn(props.formik.errors, props.name);
    const touch = getIn(props.formik.touched, props.name);

    return(
        <>
            {(touch && error) && (
            <span className={styles.error}>
                {error}
            </span> )}
        </>          
    )
}

export default connect(ErrorMessageInput)