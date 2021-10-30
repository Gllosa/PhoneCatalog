import React from 'react';
import '../styles/App.css';


function PhonePopUp(props){

    return (
        <>
        {props.showModal ? (
        <div className="phone-pop-up-container">
            <div>
                <img className="pop-up-img" src={props.img} alt={props.alt}></img>
            </div>
            <div className="specs-container">
                <img className="close-btn" src={require('../images/close_icon.png').default} onClick={props.openModal}/>
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
                <h4>Specifications</h4>
                <div className="tech-specs">
                    <ul>
                        <li>Screen: {props.screen}</li>
                        <li>Processor: {props.processor}</li>
                        <li>Ram: {props.ram} GB</li>
                    </ul>
                    <h6>{props.price}€</h6>
                    <span></span>
                </div>
            </div>
        </div>
        ) : null}
        </>
    )
}
export default PhonePopUp;