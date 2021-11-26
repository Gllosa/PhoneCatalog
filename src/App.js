import {
  Routes,
  Route,
} from "react-router-dom";

import PhoneDetails from './routes/PhoneDetails'

import Home from './routes/Home'

export default function App(){
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='phones/:id' element={<PhoneDetails/>}/>
      </Routes>
    </>
  )
}

