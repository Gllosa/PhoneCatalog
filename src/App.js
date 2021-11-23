import { useEffect, useState } from 'react'

import getPhones from './services/getPhones';

import Header from './components/Header';
import PhonePopUp from './components/PhonePopUp';
import SearchBar from './components/SearchBar';
import PhonesList from './components/PhonesList';
import FilterOptions from './components/FilterOptions';

import { Backdrop, CircularProgress } from '@material-ui/core';

import './styles/App.css';


export default function App() {

  const [showPopUp, setShowPopUp] = useState(false);

  const openPopUp = () => {
    setShowPopUp(showPopUp => !showPopUp);
  }

  const [id, setId] = useState(null);

  const [filterText, setFilterText] = useState('')

  const [alphabetic, setAlphabetic] = useState(true)

  const [phones, setPhones] = useState()

  useEffect(() => {
    getPhones().then((phones) => {setPhones(phones)})
  }
  , [])
  
  return (
    <div className="App">
      <Header name="Phone Catalog" img={require('./images/logoBlanco.png').default}/>
      <div className="search">
        <img 
          className='filter' 
          src={require('./images/filter.png').default}
          alt='filter icon' 
        /> 
        <FilterOptions setAlphabetic={setAlphabetic} alphabetic={alphabetic}/>
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
