import React from 'react';
import './App.css';
import Homepage from './containers/Homepage'
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Route exact path='/' render = { (routeProps) => <Homepage {... routeProps} /> } />
    
    </BrowserRouter>
  );
}

export default App;
