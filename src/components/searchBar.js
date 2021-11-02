
import '../styles/App.css';


export default function SearchBar(props){

    const setFilterText = (e) =>{
      props.setFilterText(e.target.value)
    };

    return (
        <input
          className='search-bar'
          type="text"
          placeholder="Search..."
          onChange={setFilterText}
        />
    )
}