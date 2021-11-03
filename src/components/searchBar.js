
import '../styles/App.css';


export default function SearchBar(props){

    const setFilterText = (e) =>{
      props.setFilterText(e.target.value)
    };

    const cleanSearch = (e) => {
      props.setFilterText("")
      document.getElementById('input-search').value = ""
    }

    return (
        <div className='search-container'>
          <input
            id='input-search'
            className='search-bar'
            type="text"
            placeholder="Search..."
            onChange={setFilterText}
          />
          <img 
            src={require('../images/close_icon.png').default} 
            alt='clean search'
            onClick={cleanSearch}
          />
        </div>

    )
}