import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './store/store';
import { SalesByRegion } from './components/SalesByRegion';
import { SalesByCategory } from './components/SalesByCategory';
import { Home } from './containers/Home';
function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
