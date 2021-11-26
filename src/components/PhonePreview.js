import React from 'react';
import '../styles/App.css';
import {useDispatch} from 'react-redux'
import {updateId} from '../reducers/idReducer'
import { toggleModal } from '../reducers/modalReducer';
import { Link } from 'react-router-dom';

function PhonePreview({phone}){

    const {id, imageFileName, alt, name} = phone
    const dispatch = useDispatch()

    return (
        <li className="phone-preview-container">
            <Link to={`/phones/${id}`} style={{ textDecoration: 'none' }}>
                <img 
                    id={id} 
                    src={require('../images/' + imageFileName).default}
                    alt={alt} 
                    onClick={() => {dispatch(toggleModal()); dispatch(updateId(id))}}
                />
                <h3>{name}</h3>
            </Link>
        </li>
    )
}

export default PhonePreview
