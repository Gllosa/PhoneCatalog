import React from 'react';
import '../styles/App.css';

function PhonePreview(props){
    return (
        <li className="phone-preview-container">
            <img src={props.img} alt={props.alt}></img>
            <h3>{props.name}</h3>
        </li>
    )
}

export default PhonePreview
