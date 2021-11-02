import {useEffect, useState} from 'react'

import HttpRequest from './request';

import Header from './Header';
import PhonePopUp from './PhonePopUp';
import SearchBar from './SearchBar';
import PhonesList from './PhonesList';

import { Backdrop, CircularProgress } from '@material-ui/core';

import '../styles/App.css';
import FilterOptions from './FilterOptions';


export default function App() {

  const [showPopUp, setShowPopUp] = useState(false);
  const openPopUp = () => {
    setShowPopUp(showPopUp => !showPopUp);
  }

  const [id, setId] = useState(null);

  const [filterText, setFilterText] = useState('')

  const [alphabetic, setAlphabetic] = useState(null)

  let phones = HttpRequest();

  useEffect(()=>{
    if (phones){
      if (alphabetic){
        phones.sort((a, b) => b.name.localeCompare(a.name))
    }
    else{
      phones.sort((a, b) => a.name.localeCompare(b.name))
    }
    }
  }, [alphabetic, phones])

  return (
    <div className="App">
      <Header name="Phone Catalog" img={require('../images/logoBlanco.png').default}></Header>
      <div className="search">
        <img 
          className='filter' 
          src={require('../images/filter.png').default}
          alt='filter icon' 
        /> 
        <FilterOptions setAlfabetic={setAlphabetic}/>
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
              alphabetically = {alphabetic}
          />
        }
      </ul>
      <> {!id ? null : (
        <PhonePopUp
          openPopUp={openPopUp}
          showPopUp={showPopUp}
          setShowPopUp={setShowPopUp}
          phone={phones.find(phone => phone.id === id)}
        />
      )
      }</>
    </div>
  );
}
