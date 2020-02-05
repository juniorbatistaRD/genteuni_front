import React from 'react'
import swal from '@sweetalert/with-react'
import   './index.css'

export default function SuccessAlert(props){
    swal({
        icon:props.type,
        title:props.title,
        text:props.text,
        content:
            <div>
                {props.content}
            </div>
    })
}