import react, {useState} from 'react'

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

  let phones = ReadApi();
  return (
    <div className="App">
      <Header name="Phone Catalog" img={require('../images/logoBlanco.png').default}></Header>
      <ul className="list-container">
        { !phones ? "cargando..." : phones.map((phone) =>{
          return <PhonePreview
                  openModal={openModal} 
                  key={phone.id} 
                  name={phone.name} 
                  img={require('../images/' + phone.imageFileName).default}
                  />
          })}
      </ul>
      <PhonePopUp
        openModal={openModal}
        showModal={showModal}
        img={require('../images/iphone_7.png').default}
        name="Iphone 7"
        desc="El iPhone 7 es un teléfono inteligente de gama alta diseñado por Apple Inc., presentado el 16 de septiembre de 2016 junto con el iPhone SE como sucesor del iPhone 6s, durante el evento Keynote realizado en San Francisco (California, EE. UU.)."
        screen="5.6 inches IPS"
        processor="I8 super guay"
        ram="8"
      />
    </div>
  );
}

export default App;


