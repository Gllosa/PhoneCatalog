import React from 'react';
import '../styles/App.css';
import {useDispatch} from 'react-redux'
import {updateId} from '../reducers/idReducer'
import { toggleModal } from '../reducers/modalReducer';

function PhonePreview({phone}){

    const {id, imageFileName, alt, name} = phone
    const dispatch = useDispatch()

    return (
        <li className="phone-preview-container">
            <img 
                id={id} 
                src={require('../images/' + imageFileName).default}
                alt={alt} 
                onClick={() => {dispatch(toggleModal()); dispatch(updateId(id))}}
            />
            <h3>{name}</h3>
        </li>
    )
}

export default PhonePreview
