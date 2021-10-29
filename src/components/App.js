import '../styles/App.css';
import Header from './Header';
import logo from '../images/logoBlanco.png'
import PhonePreview from './phonePreview';
import ReadApi from './apiRead';

function App() {
  let phones = ReadApi();
  return (
    <div className="App">
      <Header name="Phone Catalog" img={logo}></Header>
      <ul className="list-container">
        { !phones ? "cargando..." : phones.map((phone) =>{
          return <PhonePreview 
                  key={phone.id} 
                  name={phone.name} 
                  img={require('../images/'+phone.imageFileName).default}
                  />
          })}
      </ul>

    </div>
  );
}

export default App;


