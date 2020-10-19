import React from 'react';
import './App.css';
import HomePage from './comps/HomePage';
import About from './comps/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './comps/NavBar';
import CityPage from './comps/CityPage';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Router>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/paris">
          <CityPage selectedCity="Paris"/>
        </Route>
        <Route path="/amsterdam">
          <CityPage selectedCity="Amsterdam"/>
        </Route>
        <Route path="/london">
          <CityPage selectedCity="London"/>
        </Route>
        <Route path="/edinburgh">
          <CityPage selectedCity="Edinburgh"/>
        </Route>
        <Route path="/rome">
          <CityPage selectedCity="Rome"/>
        </Route>
      </Router>
    </div >
  );
}

export default App;