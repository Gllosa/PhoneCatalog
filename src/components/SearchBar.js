import { useDispatch } from 'react-redux';
import { setFilterText } from '../store/filter/actionCreators';

import '../styles/App.css';


export default function SearchBar(){

    const dispatch = useDispatch()

    const setText = (e) =>{
      dispatch(setFilterText(e.target.value))
    };

    const cleanSearch = () => {
      dispatch(setFilterText(""))
      document.getElementById('input-search').value = ""
    }

    return (
        <div className='search-container'>
          <input
            id='input-search'
            className='search-bar'
            type="text"
            placeholder="Search..."
            onChange={setText}
          />
          <img 
            src={require('../images/close_icon.png').default} 
            alt='clean search'
            onClick={cleanSearch}
          />
        </div>

    )
}
