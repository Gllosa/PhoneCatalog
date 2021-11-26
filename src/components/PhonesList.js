import { useSelector } from 'react-redux';
import PhonePreview from './PhonePreview';

export default function PhonesList(){

    const phones = useSelector(state => state.phones)

    const {alphabetic, filterText} = useSelector(state => state.filter)

    if (alphabetic){
      phones.sort((a, b) => a.name.localeCompare(b.name))
    }
    else{
      phones.sort((a, b) => b.name.localeCompare(a.name))
    }

    let filteredPhones = [];
    phones.forEach((phone) => {
        if (phone.name.toUpperCase().indexOf(filterText.toUpperCase()) !== -1){
            filteredPhones.push(phone)
        }
    })

    return (
        filteredPhones.length !== 0 ? 
        filteredPhones.map((phone) => {return <PhonePreview phone = {phone} key={phone.id}/>}) : 
        <h2 className="no-results">No results for "{filterText}"</h2>
    )
}