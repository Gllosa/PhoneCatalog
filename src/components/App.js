import {useState} from 'react'

import '../styles/App.css';
import Header from './Header';
import PhonePreview from './phonePreview';
import ReadApi from './apiRead';
import PhonePopUp from './PhonePopUp';

function App() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  }
  const [id, setId] = useState(null);

  let phones = ReadApi();
  return (
    <div className="App">
      <Header name="Phone Catalog" img={require('../images/logoBlanco.png').default}></Header>
      <ul className="list-container">
        { !phones ? "cargando..." : phones.map((phone) =>{
          return <PhonePreview
                  setId={() => setId(phone.id)}
                  openModal={openModal} 
                  key={phone.id} 
                  name={phone.name} 
                  img={require('../images/' + phone.imageFileName).default}
                  />
          })}
      </ul>
      <> {!id ? null : (
      <PhonePopUp
        openModal={openModal}
        showModal={showModal}
        img = {require('../images/'+phones[id-1].imageFileName).default}
        name={phones[id-1].name}
        desc={phones[id-1].description}
        screen={phones[id-1].screen}
        processor={phones[id-1].processor}
        ram={phones[id-1].ram}
        price={phones[id-1].price}
      />)
      }
      </>
    </div>
  );
}

export default App;


