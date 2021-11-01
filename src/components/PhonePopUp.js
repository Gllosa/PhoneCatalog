import {React, useEffect, useRef} from 'react';
import '../styles/App.css';


export default function PhonePopUp(props){

    const {openPopUp, showPopUp, setShowPopUp, phone} = props;
    
    // Avoid scrolling when opened
    useEffect(() =>{
        if (showPopUp){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
    }, [showPopUp]);
    
    //Close popUp when clicking outside
    let popUpRef = useRef()
    useEffect(() => {
        const outsideClick = e => {
            if (showPopUp && !popUpRef.current.contains(e.target)) {
                setShowPopUp(false)
            }
        }
        document.addEventListener("mousedown", outsideClick)

        return () => {
            document.removeEventListener("mousedown", outsideClick)
        }
    }, [showPopUp, setShowPopUp])
    
    return (
        <>
        {showPopUp ? (
        <div className="phone-pop-up-container" ref={popUpRef}>
            <div className="pop-up-image-container">
                <img 
                    className="pop-up-img" 
                    src={require('../images/'+phone.imageFileName).default} 
                    alt={phone.alt}>
                </img>
            </div>
            <div className="specs-container">
                <img 
                    className="close-btn" 
                    src={require('../images/close_icon.png').default} 
                    onClick={openPopUp}
                    alt={phone.alt}
                />
                <h3>{phone.name}</h3>
                <p>{phone.description}</p>
                <h4>Specifications</h4>
                <div className="tech-specs">
                    <ul>
                        <li>Screen: {phone.screen}</li>
                        <li>Processor: {phone.processor}</li>
                        <li>Ram: {phone.ram} GB</li>
                    </ul>
                    <h6>{phone.price}€</h6>
                    <span></span>
                </div>
            </div>
        </div>
        ) : null}
        </>
    )
}