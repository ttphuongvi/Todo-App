import React from 'react';
import './App.css';
import {Switch, BrowserRouter} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const  TodoApp = () => {
  return (
    <div className="Todo-App">
      {/* <BrowserRouter> */}
        <Header/>
        {/* <Switch>
            {routes.map((item, index) => {
              return (
                <MyRoute key={index} path={item.path} component={item.component} />
              )
            })}
        </Switch>
      </BrowserRouter>    */}
      <Footer></Footer> 
    </div>
  );
}

export default TodoApp;
