import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Resume from './components/pages/Resume'
import Contact from './components/pages/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Resume" component={Resume} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
