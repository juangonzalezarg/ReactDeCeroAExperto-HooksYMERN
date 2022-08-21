import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';

import './styles.css'

// import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={ 20 }/>
        {/* <FirstApp title='Hola, soy Vegeta'/> */}
    </React.StrictMode>
)