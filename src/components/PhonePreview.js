import React from 'react';
import '../styles/App.css';

function PhonePreview(props){
    return (
        <li className="phone-preview-container">
            <img 
                id={props.id} 
                src={props.img} 
                alt={props.alt} 
                onClick={() => {props.openPopUp(); props.setId()}}
            />
            <h3>{props.name}</h3>
        </li>
    )
}

export default PhonePreview
