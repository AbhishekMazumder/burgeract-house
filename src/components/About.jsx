import React from 'react'
import aboutImg from "../images/about.png"

const About = () => {
  return (
    <div id="about">
      <div className="about-text">
        <h1>Upcoming Events</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati delectus nam, doloremque excepturi saepe officia eos et pariatur eveniet, voluptate eligendi nobis odio mollitia.</p>
        <button>Read More</button>
      </div>

      <div className="about-image">
        <img src={aboutImg} alt=""/>
      </div>
    </div>
  )
}

export default About
