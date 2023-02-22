import React from 'react';
import './App.css';
import Submit from './Components/Submit'
import NavBar from './Components/NavBar'
import About from './Components/About'
import Contact from './Components/Contact'
import {Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="flexDiv">
          <NavBar></NavBar>
          <Routes>
            <Route exact path="/" element={<About />}/>        
            <Route path="submit/*" element={<Submit />}/>
            <Route path="contact/*" element={<Contact />}/>           
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
