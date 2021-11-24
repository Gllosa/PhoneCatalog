import { useDispatch, useSelector } from 'react-redux';
import { setAlphabetic } from '../reducers/filterReducer';

import '../styles/App.css';


export default function FilterOptions(){

    const alphabetic = useSelector(state => state.filter.alphabetic)
    const dispatch = useDispatch()

    return (
        <div className='filter-options'>
            <div>
                <input 
                    type="radio" 
                    id='alphabetic' 
                    name='options'
                    onChange={() => dispatch(setAlphabetic(true))}
                    checked={alphabetic}
                />
                <label htmlFor='alphabetic'>Asc. order</label>
            </div>
            <div>
                <input 
                    type="radio" 
                    id='non-alphabetic' 
                    name='options'
                    onChange={() => dispatch(setAlphabetic(false))}
                    checked={!alphabetic}
                />
                <label htmlFor='non-alphabetic'>Desc. order</label>
            </div>
        </div>
    )
}