import React from 'react';
import './App.css';
import{ Route }from"react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
      <section>

    <Header/>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    <Footer/>
      </section>
    
    
  );
}

export default App;
