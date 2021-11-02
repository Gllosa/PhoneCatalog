import '../styles/App.css';


export default function FilterOptions(props){

    const setAlph = () =>{
        props.setAlfabetic(true)
    }
    const setNonAlph = () =>{
        props.setAlfabetic(false)
    }

    return (
        <div className='filter-options'>
            <div>
                <input 
                    type="radio" 
                    id='alphabetic' 
                    name='options' 
                    onChange={setAlph}
                >
                </input>
                <label htmlFor='alphabetic'>Asc. order</label>
            </div>
            <div>
                <input 
                    type="radio" 
                    id='non-alphabetic' 
                    name='options'
                    onChange={setNonAlph}
                >
                </input>
                <label htmlFor='non-alphabetic'>Desc. order</label>
            </div>
        </div>
    )
}