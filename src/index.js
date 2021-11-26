import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import { idReducer } from './reducers/idReducer';
import { phonesReducer } from './reducers/phonesReducer';
import { filterReducer } from './reducers/filterReducer';
import { modalReducer } from './reducers/modalReducer';
import { BrowserRouter } from 'react-router-dom';


const reducer = combineReducers({
  id: idReducer,
  phones: phonesReducer,
  filter: filterReducer,
  showModal: modalReducer
})

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)