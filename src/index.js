import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import {Toaster} from "react-hot-toast"
import 'react-toastify/dist/ReactToastify.css';
import {store} from "./redux/Store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store ={store}>
        <App />
      </Provider>
    <Toaster/>
    </BrowserRouter>
  </React.StrictMode>
);


