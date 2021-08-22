import React from 'react';
import ReactDOM from 'react-dom';
import './destyle.css'
import './index.css';
import './Main.css'
import Header from './compornent/header';
import Contents from './compornent/contents';
import Footer from './compornent/footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Contents/>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
