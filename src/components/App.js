import { useState } from 'react'

import HttpRequest from './request';

import Header from './Header';
import PhonePopUp from './PhonePopUp';
import SearchBar from './SearchBar';
import PhonesList from './PhonesList';
import FilterOptions from './FilterOptions';

import { Backdrop, CircularProgress } from '@material-ui/core';

import '../styles/App.css';


export default function App() {

  const [showPopUp, setShowPopUp] = useState(false);
  const openPopUp = () => {
    setShowPopUp(showPopUp => !showPopUp);
  }

  const [id, setId] = useState(null);

  const [filterText, setFilterText] = useState('')

  const [alphabetic, setAlphabetic] = useState(true)

  let phones = HttpRequest();
  
  return (
    <div className="App">
      <Header name="Phone Catalog" img={require('../images/logoBlanco.png').default}/>
      <div className="search">
        <img 
          className='filter' 
          src={require('../images/filter.png').default}
          alt='filter icon' 
        /> 
        <FilterOptions setAlfabetic={setAlphabetic} alphabetic={alphabetic}/>
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
              alphabetic = {alphabetic}
          />
        }
      </ul>
      <> {!id ? null : (
        <PhonePopUp
          openPopUp={openPopUp}
          showPopUp={showPopUp}
          setShowPopUp={setShowPopUp}
          phone={phones.find(phone => phone.id === id)}
        />)
      }</>
    </div>
  );
}
