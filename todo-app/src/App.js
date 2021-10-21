import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { MyContextProvider } from './context/MyContext';
import {TodoContextProvider} from './context/TodoContext'

const  TodoApp = () => {
  return (
    
      <MyContextProvider>
      <TodoContextProvider>
        <div className="Todo-App">
          <Header/>
          <NavBar/>
          <Footer></Footer> 
        </div>
        </TodoContextProvider>
      </MyContextProvider>
    
  );
}

export default TodoApp;
