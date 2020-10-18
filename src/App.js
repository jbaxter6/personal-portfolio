import React from 'react';
import './App.css';
import Homepage from './containers/Homepage'
import Lifepage from './containers/Lifepage'
import Contactpage from './containers/Contactpage'
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Route exact path='/' render = { (routeProps) => <Homepage {... routeProps} /> } />
        <Route path='/life' render = { (routeProps) => <Lifepage {... routeProps} /> } />
        <Route path='/contact' render = { (routeProps) => <Contactpage {... routeProps} /> } />
    
    </BrowserRouter>
  );
}

export default App;
