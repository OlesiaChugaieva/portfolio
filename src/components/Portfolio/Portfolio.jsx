import React from 'react'
import "./Portfolio.css"

import weatherDashboard from '../../../src/assets/screenshots/Project1.jpg'
import classroomManagementApp from '../../../src/assets/screenshots/ClassroomManagementApp.jpg'

const Portfolio = () => {
return (
  <section id="portfolio">
          <h1 className="headings">Portfolio</h1>
          <div className="gallery">
              <a href="">
                <img src={weatherDashboard} alt="weather dashboard app" />
              </a>
              <a href="" alt="">
                <img src={classroomManagementApp} alt="classrom management app" />
              </a>
          </div>
      </section>
  
)
}

export default Portfolio