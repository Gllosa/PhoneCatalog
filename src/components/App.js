import {useState} from 'react'

import Request from './request';

import Header from './Header';
import PhonePreview from './PhonePreview';
import PhonePopUp from './PhonePopUp';

import { Backdrop, CircularProgress } from '@material-ui/core';

import '../styles/App.css';

export default function App() {

  // PopUp state
  const [showPopUp, setShowPopUp] = useState(false);
  const openPopUp = () => {
    setShowPopUp(showPopUp => !showPopUp);
  }

  // Status for phoneId on popUp
  const [id, setId] = useState(null);

  let phones = Request();

  return (
    <div className="App">
      <Header name="Phone Catalog" img={require('../images/logoBlanco.png').default}></Header>
      <ul className="list-container">
        { !phones ?  (
        <Backdrop open>
          <CircularProgress color="inherit"/>
        </Backdrop>)
        : phones.map((phone) =>{
          return <PhonePreview
                  setId={() => setId(phone.id)}
                  openModal={openPopUp} 
                  key={phone.id} 
                  name={phone.name} 
                  img={require('../images/' + phone.imageFileName).default}
                  />
          })}
      </ul>
      <> {!id ? null : (
        <PhonePopUp
          openPopUp={openPopUp}
          showPopUp={showPopUp}
          setShowPopUp={setShowPopUp}
          phone={phones[id - 1]}
        />
      )
      }</>
    </div>
  );
}
