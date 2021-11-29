import {React, useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import getPhone from '../services/getPhone'

import '../styles/App.css';

export default function PhoneDetails(){

    const dispatch = useDispatch()

    const { id } = useParams()

    const [phone, setPhone] = useState(null)

    useEffect(() => {
        getPhone(id).then((phone) => setPhone(phone))
      }
      , [id, dispatch])    
    
    return (
        <>
        {phone ?
        <div className="phone-pop-up-container">
            <div className="pop-up-image-container">
                <img 
                    className="pop-up-img" 
                    src={require('../images/' + phone.imageFileName).default} 
                    alt={phone.alt}
                />
            </div>
            <div className="specs-container">
                <Link to='/'>
                    <img 
                        className="close-btn" 
                        src={require('../images/home.png').default} 
                        alt={phone.alt}
                    />
                </Link>
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
        : <h1 className='no-results'>No phone found</h1>}
        </>
    )
}
