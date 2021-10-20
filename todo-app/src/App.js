import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const  TodoApp = () => {
  return (
    <div className="Todo-App">
        <Header/>
        <NavBar/>
      <Footer></Footer> 
    </div>
  );
}

export default TodoApp;
