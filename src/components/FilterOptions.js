import '../styles/App.css';


export default function FilterOptions(props){

    const setAlph = () =>{
        props.setAlphabetic(true)
    }
    const setNonAlph = () =>{
        props.setAlphabetic(false)
    }

    return (
        <div className='filter-options'>
            <div>
                <input 
                    type="radio" 
                    id='alphabetic' 
                    name='options'
                    onChange={setAlph}
                    checked={props.alphabetic}
                />
                <label htmlFor='alphabetic'>Asc. order</label>
            </div>
            <div>
                <input 
                    type="radio" 
                    id='non-alphabetic' 
                    name='options'
                    onChange={setNonAlph}
                    checked={!props.alphabetic}
                />
                <label htmlFor='non-alphabetic'>Desc. order</label>
            </div>
        </div>
    )
}