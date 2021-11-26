import {React, useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setShowModal, toggleModal } from '../reducers/modalReducer';
import getPhone from '../services/getPhone'

import '../styles/App.css';

export default function PhoneDetails(){

    const dispatch = useDispatch()

    const {id} = useParams()

    const [phone, setPhone] = useState(null)

    useEffect(() => {
        getPhone(id).then((phone) => setPhone(phone))
      }
      , [id, dispatch])


    const showModal = useSelector(state => state.showModal)
    
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
        {phone ?
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
        </div>
        : <h1>No hay telefono</h1>}
        </>
    )
}