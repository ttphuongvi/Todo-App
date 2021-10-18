import React from 'react'
import './Header.css'
import {Link, Switch, BrowserRouter, Route} from 'react-router-dom'
import Todo from '../AddTodo/Todo'
function Header() {
  return (
    <BrowserRouter>
    <header className="header">
          <nav>
            <Link to="/Todo-App" className="logo">TODO LIST</Link>
          </nav>
          <a href="https://github.com/ttphuongvi/Todo-App" target="_blank" className="profile">TRỊNH THỊ THỊ PHƯƠNG VI  |  4501104276</a>
        </header>
        <Switch>
          <Route path="/Todo-App"><Todo/></Route>
        </Switch>
        </BrowserRouter>
  )
}

export default Header

