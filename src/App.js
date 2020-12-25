import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
