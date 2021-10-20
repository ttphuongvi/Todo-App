import React from 'react'
import './NavBar.css'
import { NavLink, Switch, BrowserRouter } from "react-router-dom";
import MyRoute from '../MyRoute/MyRoute'
import routes from '../../config/routes'

const NavBar = () => {
    return (
        <BrowserRouter>
        <div className="navbar-container" >
        {routes.map((value, index) => 
            <NavLink key = {index} to={value.link}  className="navlink"
            activeStyle={{fontWeight: "900",color: "#FF0075"}}>{value.name}</NavLink>
        )}
            
        </div>
        <Switch>
            {routes.map((item, index) => {
              return (
                <MyRoute key={index} path={item.link} component={item.component} />
              )
            })}
        </Switch>
    </BrowserRouter>
    )
}

export default NavBar
