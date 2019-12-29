import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { BrowserRouter } from 'react-router-dom'
import "gestalt/dist/gestalt.css";

ReactDom.render(

    <BrowserRouter>
        <App />
    </BrowserRouter>, 

    document.getElementById('root'));
