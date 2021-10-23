import React from 'react'
import './About.css';
import data from './data'
import AboutMe from '../../img/f7417183ec5c12024b4d (1).jpg'
const About = () => {
    return (
        <div className="container-about">
        <div className="container-about-small">
            <div className="title">GIỚI THIỆU</div>
            <div className="form-about">
                <img className="my-img" src={AboutMe} alt="img"></img>
                <div className="between"></div>
                <div className="infomation">
                    {data.map((value) => {
                        return (
                            <div className="set-info">
                                <div className="title-info">{value.title}: </div>
                                <div className="content">{value.content}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        </div>
    )
}

export default About
