import {useState} from 'react'

import HttpRequest from './request';

import Header from './Header';
import PhonePopUp from './PhonePopUp';
import SearchBar from './SearchBar';
import PhonesList from './PhonesList';

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

  const [filterText, setFilterText] = useState('')

  let phones = HttpRequest();

  return (
    <div className="App">
      <Header name="Phone Catalog" img={require('../images/logoBlanco.png').default}></Header>
      <div className="search">
        <SearchBar setFilterText={setFilterText}/>
      </div>
      <ul className="list-container">
        { !phones ?  (
          <Backdrop open>
            <CircularProgress color="inherit"/>
          </Backdrop>): 
          <PhonesList
              phones = {phones}
              filterText = {filterText}
              setId = {setId}
              openPopUp = {openPopUp}
          />
        }
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
