import React from 'react'
import olesia from '../../assets/images/IMG_0014.JPG'
import "./About.css"

const About = () => {
return (
  <section id="about" >
    <h1 className="headings">About me</h1>
    <div id="pic">
        <img src={olesia} alt="profile picture" />
        <div id="intro">
            <h2></h2>
            <br />
            <p>Hello World! I'm Olesia Chugaieva, a Full Stack Web Developer based out of Philadelphia focused on crafting clean& user-friendly experiences.


            </p>
        </div>
    </div>
  </section>
)
}

export default About
