import React from 'react'
import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Section  from './Components/Section'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
     <Nav/>
     <Home/>
     <Section/>
     <Footer/>
    </div>
  );
}

export default App;
