import React from 'react'
import styles from './index.module.css'
import loadingCircle from '../../../assets/images/loading-circle.gif'


function Button({children, typeStyle, className,onClick,width,padding,margin,loading, ...rest}){

    const classNames = [styles.btn , styles[typeStyle] , className].join(' ') 


    return(
        <button 
            className={classNames}
            onClick={onClick}
            style={{ 
                width, 
                padding,
                margin,
            }}
            disabled={loading}
            {...rest}
        >   
            {loading ? 
                <>
                    <img src={loadingCircle} width="25" alt="loading"/>
                    <span>Cargando...</span> 
                </>
                : children}
        </button>
    )
    



}

Button.defaultProps ={
    className:' ',
    typeStyle: 'primary',
    onClick: null
}


export default Button