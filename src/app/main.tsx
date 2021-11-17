import React from 'react';
//import ReactDOM from 'react-dom';
import './globals.css';
import App from './App';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FileBrowser from './Pages/FileBrowser/FileBrowser';

//ReactDOM.render(
//<React.StrictMode>
//  <App />
// </React.StrictMode>,
//document.querySelector('#root')
//);

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="filebrowser" element={<FileBrowser />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
