import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import { phonesReducer } from './store/phones/phonesReducer';
import { filterReducer } from './store/filter/filterReducer';
import { BrowserRouter } from 'react-router-dom';


const reducer = combineReducers({
  phones: phonesReducer,
  filter: filterReducer,
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