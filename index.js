import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter} from 'react-router-dom'
import "swiper/css/bundle";
import { Context } from './Context';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Context>
    <App />
  </Context>
  </BrowserRouter>
);

