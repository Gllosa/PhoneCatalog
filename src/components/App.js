import {useState} from 'react'

import HttpRequest from './request';

import Header from './Header';
import PhonePreview from './PhonePreview';
import PhonePopUp from './PhonePopUp';

import { Backdrop, CircularProgress } from '@material-ui/core';

import '../styles/App.css';
import SearchBar from './searchBar';

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
  let filteredPhones = [];
  if (phones){
    phones.forEach((phone) => {
      if (phone.name.toUpperCase().indexOf(filterText.toUpperCase()) !== -1){
        filteredPhones.push(phone)
      }
    })
  }else{
    filteredPhones = phones;
  }

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
        </Backdrop>)
        : (filteredPhones.length !== 0 ? filteredPhones.map((phone) =>{
          return <PhonePreview
                  setId={() => setId(phone.id)}
                  openPopUp={openPopUp} 
                  key={phone.id} 
                  name={phone.name} 
                  img={require('../images/' + phone.imageFileName).default}
                  />
          }): <h2 className="no-results">No results for "{filterText}"</h2>)}
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
