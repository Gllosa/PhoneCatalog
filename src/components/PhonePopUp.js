import {React, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal, toggleModal } from '../reducers/modalReducer';

import '../styles/App.css';

export default function PhonePopUp(){

    const phones = useSelector(state => state.phones)
    const id = useSelector(state => state.id)
    const phone = phones.find((phone) => phone.id === id)

    const showModal = useSelector(state => state.showModal)
    const dispatch = useDispatch()

    // Avoid scrolling when opened
    useEffect(() =>{
        if (showModal){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
    }, [showModal]);
    
    //Close popUp when clicking outside
    let popUpRef = useRef()
    useEffect(() => {
        const outsideClick = (event) => {
            if (showModal && !popUpRef.current.contains(event.target)) {
                dispatch(setShowModal(false))
            }
        }
        document.addEventListener("mousedown", outsideClick)

        return () => {
            document.removeEventListener("mousedown", outsideClick)
        }
    }, [showModal, dispatch])
    
    return (
        <>
        {showModal ? (
        <div className="phone-pop-up-container" ref={popUpRef}>
            <div className="pop-up-image-container">
                <img 
                    className="pop-up-img" 
                    src={require('../images/'+phone.imageFileName).default} 
                    alt={phone.alt}
                />
            </div>
            <div className="specs-container">
                <img 
                    className="close-btn" 
                    src={require('../images/close_icon.png').default} 
                    onClick={() => dispatch(toggleModal())}
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
        </div>) : 
        null}
        </>
    )
}