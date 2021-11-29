import { useSelector } from 'react-redux';
import PhonePreview from './PhonePreview';

export default function PhonesList(){

    let phones = useSelector(state => state.phones)

    const {alphabetic, filterText} = useSelector(state => state.filter)

    if (alphabetic){
      phones.sort((a, b) => a.name.localeCompare(b.name))
    }
    else{
      phones.sort((a, b) => b.name.localeCompare(a.name))
    }

    phones = phones.filter((phone) => {return phone.name.toUpperCase().indexOf(filterText.toUpperCase()) !== -1})

    return (
        phones.length !== 0 ? 
        phones.map((phone) => {return <PhonePreview phone = {phone} key={phone.id}/>}) : 
        <h2 className="no-results">No results for "{filterText}"</h2>
    )
}