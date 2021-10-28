import './App.css';
import Header from './Header';
import logo from './logo.png';
import PhonePreview from './phonePreview';

function App() {
  return (
    <div className="App">
      <Header name="Phone Catalog" img={logo}></Header>
      <ul className="list-container">
        <PhonePreview name="Iphone 12" img={logo} alt="Hola"></PhonePreview>
        <PhonePreview name="Iphone 12" img={logo} alt="Hola"></PhonePreview>
        <PhonePreview name="Iphone 12" img={logo} alt="Hola"></PhonePreview>
        <PhonePreview name="Iphone 12" img={logo} alt="Hola"></PhonePreview>
      </ul>
      <ul className="list-container">
        <PhonePreview name="Iphone 12" img={logo} alt="Hola"></PhonePreview>
        <PhonePreview name="Iphone 12" img={logo} alt="Hola"></PhonePreview>
        <PhonePreview name="Iphone 12" img={logo} alt="Hola"></PhonePreview>
        <PhonePreview name="Iphone 12" img={logo} alt="Hola"></PhonePreview>
      </ul>
    </div>
  );
}

export default App;
