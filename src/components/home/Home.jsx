import React from 'react'
import './home.css'

const Home = () => {
  window.addEventListener('load', () => {
    console.log("pageLoaded");
  }
  );
  window.addEventListener('scroll', ()=> {
    console.log("scrolling");
  }
  );
  return (
    <div className="home">
      <div className="BackWords">
        <h1>I am Lohit Muralidharan</h1>
      </div>
      <div className="aboutMe">
        <h1>I am Lohit Muralidharan</h1>      
      </div>
      <div className="Hello">
        <h2>Hello!</h2>
      </div>
      <div className="Description">
        <h3>A UIUC Computer Engineering Student aspiring to be a Full Stack Dev</h3>
      </div>
    </div>
  )
}

export default Home