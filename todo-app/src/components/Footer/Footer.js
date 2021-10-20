import React from 'react'
import './Footer.css'
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom'
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
            <p>Được thực hiện bởi: </p>
            <a href="https://github.com/ttphuongvi/Todo-App" target="_blank" className="profile-1">Trịnh Thị Phương Vi</a>
            </div>
        </div>
    )
}

export default Footer
