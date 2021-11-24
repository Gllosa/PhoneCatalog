import { useEffect } from 'react'

import getPhones from './services/getPhones';

import Header from './components/Header';
import PhonePopUp from './components/PhonePopUp';
import SearchBar from './components/SearchBar';
import PhonesList from './components/PhonesList';
import FilterOptions from './components/FilterOptions';

import { useDispatch, useSelector } from 'react-redux';
import { setPhones } from './reducers/phonesReducer';

import { Backdrop, CircularProgress } from '@material-ui/core';

import './styles/App.css';


export default function App() {

  const dispatch = useDispatch()

  const phones = useSelector(state => state.phones)
  
  useEffect(() => {
    getPhones().then((phones) => dispatch(setPhones(phones)))
  }
  , [dispatch])

  return (
    <div className="App">
      <Header name="Phone Catalog" img={require('./images/logoBlanco.png').default}/>
      <div className="search">
        <img 
          className='filter' 
          src={require('./images/filter.png').default}
          alt='filter icon' 
        /> 
        <FilterOptions/>
        <SearchBar/>
      </div>
      <ul className="list-container">
        { !phones ?  (
          <Backdrop open>
            <CircularProgress color="inherit"/>
          </Backdrop>): 
          <PhonesList/>
        }
      </ul>
    <PhonePopUp/>
    </div>
  );
}
