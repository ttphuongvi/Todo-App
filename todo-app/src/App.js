import React from 'react';
import './App.css';
import {  Switch, BrowserRouter, Route } from "react-router-dom";
import TodoList from './components/TodoForm/TodoList';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { MyContextProvider } from './context/MyContext';
import {TodoContextProvider} from './context/TodoContext'

const  TodoApp = () => {
  return (
    
      <MyContextProvider>
      <BrowserRouter>
      <TodoContextProvider>
        <div className="Todo-App">
          <Header/>
          <NavBar/>
          <Switch>
            <Route path="/TodoList">
              <TodoList/>
            </Route>
          </Switch>
          <Footer></Footer> 
        </div>
        </TodoContextProvider>
        </BrowserRouter>
      </MyContextProvider>
    
  );
}

export default TodoApp;
