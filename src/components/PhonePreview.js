import React from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

function PhonePreview({phone}){

    const {id, imageFileName, alt, name} = phone

    return (
        <Link to={`/phones/${id}`} style={{textDecoration: 'none'}}>
            <li className="phone-preview-container">
                <img 
                    id={id} 
                    src={require('../images/' + imageFileName).default}
                    alt={alt} 
                />
                <h3>{name}</h3>
            </li>
        </Link>
    )
}

export default PhonePreview
