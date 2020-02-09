import React from 'react'
import  * as Yup from 'yup'
import {navigate} from '@reach/router'
import {Formik,Form} from 'formik'
import InputField from '../InputField'
import styles from './index.module.css'
import searchIcon from '../../../assets/icons/search.svg'

function SearchBar({className}) {

    return(
        <div className={className}>
                <Formik
                initialValues={{
                    search:''
                }}

                validationSchema={Yup.object({
                    search: Yup.string()
                    .required('Correo requerido'),
                })}

                onSubmit={ async (values) => {
                    navigate(`/search/${values.search}`)
                }}
               
            >
                {props => (
                <Form className={styles.form}>
                    <InputField
                        className={styles.input}
                        padding="10px"
                        placeholder="¿Quieres encontrar algo?" 
                        name="search"
                        type="text"
                    />
                    <button className={styles.button} type="submit">
                        <img src={searchIcon} alt="Search"/>
                    </button>
                </Form>
                )}
            </Formik>
            </div>
    )
}

SearchBar.defaultProps ={
    className: ' '
}

export default SearchBar