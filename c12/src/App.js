import React from 'react';
import './App.css';
import Submit from './Components/Submit'
import NavBar from './Components/NavBar'
import About from './Components/About'
import Contact from './Components/Contact'
import {Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="flexDiv">
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/" component={About}/>        
            <Route exact path="/submit" component={Submit}/>
            <Route exact path="/contact" component={Contact}/>           
          </Switch>
        </div>
      </header>
    </div>
  );
}

export default App;
