import React from 'react'
import {useField} from 'formik'
import styles from './TextAreaField.module.css'


function TextAreaField({ width, padding,className, ...props}){ 
    const [field] = useField(props);
    
    const classNames = [styles.input , className].join(' ') 

    
    return(
        <textarea
            className={classNames}
            style={{
                width,
                padding
            }}
            {...field}
            {...props}
        ></textarea>
    )
}

TextAreaField.defaultProps ={
    padding:'15px',
    className:' '
}


export default TextAreaField