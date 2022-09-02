import React from 'react'
import './aboutMe.css'

function AboutMe() {
  return (
    <div className="AboutMe" id="AboutMe">
      <h6>About Me</h6>
      <p>
        Hey again! I am Lohit Muralidharan, coffee icecream 
        enthusiast and ex-kickboxer. As a child, I loved 
        building and contructing different things whether it
        was presentations or model rockets. Recently, I developed 
        a knack for coding, and started learning different languages
        to build webapps.
      </p>
      <br></br>
      <h2>languages I am currently learning and experimenting with: </h2>
      <br></br>
      <ul>
        <li>Django</li>
        <li>Html/CSS</li>
        <li>Javascript</li>
        <li>ReactJS</li>
        <li>NodeJS</li>
      </ul>
      <a href="https://docs.google.com/document/d/1_jmqquUeoJlHWc8kcIF4IOtQS8t4ehFf5-_rwpmvLv8/edit?usp=sharing">Resume</a>
    </div>
  )
}

export default AboutMe