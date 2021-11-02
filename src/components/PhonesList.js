import PhonePreview from './PhonePreview';


export default function PhonesList(props){
    const {phones, filterText, setId, openPopUp} = props;

    let filteredPhones = [];
    phones.forEach((phone) => {
        if (phone.name.toUpperCase().indexOf(filterText.toUpperCase()) !== -1){
            filteredPhones.push(phone)
        }
    })
    

    return (
        (filteredPhones.length !== 0 ? 
        filteredPhones.map((phone) =>{
            return <PhonePreview
                    setId={() => setId(phone.id)}
                    openPopUp={openPopUp} 
                    key={phone.id} 
                    name={phone.name} 
                    img={require('../images/' + phone.imageFileName).default}
                    />
        }): <h2 className="no-results">No results for "{filterText}"</h2>)
    )
}