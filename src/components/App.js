import {useState, useRef, useEffect} from 'react'

import ReadApi from './apiRead';

import Header from './Header';
import PhonePreview from './phonePreview';
import PhonePopUp from './PhonePopUp';

import { Backdrop, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import '../styles/App.css';

// CSS for loading spinner
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function App() {
  // Spinner classes
  const classes = useStyles()

  // PopUp state
  const [showPopUp, setShowPopUp] = useState(false);
  const openPopUp = () => {
    setShowPopUp(showPopUp => !showPopUp);
  }

  // Status for phoneId on popUp
  const [id, setId] = useState(null);

  //Close popUp when clicking outside
  let popUpRef = useRef()
  useEffect(() => {
    const outsideClick = e => {
      if (showPopUp && !popUpRef.current.contains(e.target)) {
        setShowPopUp(false)
      }
    }

    document.addEventListener("mousedown", outsideClick)

    return () => {
      document.removeEventListener("mousedown", outsideClick)
    }
  }, [showPopUp])

  let phones = ReadApi();

  return (
    <div className="App">
      <Header name="Phone Catalog" img={require('../images/logoBlanco.png').default}></Header>
      <ul className="list-container">
        { !phones ?  (
        <Backdrop className={classes.backdrop} open>
            <CircularProgress color="inherit"/>
        </Backdrop>)
        : phones.map((phone) =>{
          return <PhonePreview
                  setId={() => setId(phone.id)}
                  openModal={openPopUp} 
                  key={phone.id} 
                  name={phone.name} 
                  img={require('../images/' + phone.imageFileName).default}
                  />
          })}
      </ul>
      <> {!id ? null : (
      <div ref={popUpRef}>
        <PhonePopUp
          openPopUp={openPopUp}
          showPopUp={showPopUp}
          img = {require('../images/'+phones[id-1].imageFileName).default}
          name={phones[id-1].name}
          desc={phones[id-1].description}
          screen={phones[id-1].screen}
          processor={phones[id-1].processor}
          ram={phones[id-1].ram}
          price={phones[id-1].price}
          alt={phones[id-1].name.slice(0, -3)}
        />
      </div>)
      }</>
    </div>
  );
}

export default App;


