import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { MyContextProvider } from './context/MyContext';
const  TodoApp = () => {
  return (
    
      <MyContextProvider>
      <div className="Todo-App">
        <Header/>
        <NavBar/>
        <Footer></Footer> 
        </div>
      </MyContextProvider>
    
  );
}

export default TodoApp;
