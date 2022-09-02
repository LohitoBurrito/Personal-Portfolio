import React, { useState, useEffect } from 'react'
import './navbar.css'
import { BsPlusCircleFill } from 'react-icons/bs';

const Navbar = () => {
  const [navLocation, setNavLocation] = useState('#Home');
  const [isWhiteBackground, setIsWhiteBackground] = useState(false);
  const [navbarSetup, setNavbarSetup] = useState(false);

  
  useEffect(() => {
    if (isWhiteBackground) {
      console.log('white background');
    } else if (!isWhiteBackground) {
      console.log('no white background')
    }
  }, [isWhiteBackground],
  );

  useEffect(() => {
    if (navbarSetup) {
      console.log('button Rotate');
    } else if (!navbarSetup) {
      console.log('button original');
    }
  }, [navbarSetup],
  );

  function buttonClick() {
    if (navbarSetup) {
      setNavbarSetup(false);
    } else {
      setNavbarSetup(true);
    }
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 700) {
      setIsWhiteBackground(true);
    } else {
      setIsWhiteBackground(false);
    }
    if (window.scrollY < 400) {
      console.log("FirstPage");
      setNavLocation('#Home');
    }
    if (window.scrollY >= 400 && window.scrollY < 1100) {
      console.log("SecondPage");
      setNavLocation('#Projects');
    }
    if (window.scrollY >= 1100 && window.scrollY < 2200) {
      console.log("ThirdPage");
      setNavLocation('#AboutMe');
    }
    if (window.scrollY >= 2200) {
      console.log("FifthPage");
      setNavLocation('#Contact');
    }
  }
  );

  let width = window.innerWidth;
  if (width < 510) {
    console.log("Phone");
    return (
      <div className="navbar" id="Phone">
        <button onClick={ buttonClick } id="#Phone" className={navbarSetup ? 'buttonOn' : 'buttonOff'}><BsPlusCircleFill/></button>
        <div className={navbarSetup ? 'navbarOn' : 'navbarOff'}>
          <ul className={navbarSetup ? 'PhoneListOn' : 'PhoneListOff'} id="PhoneList">
            <br></br>
            <br></br>
            <br></br>
            <li><a href="#Home" id="#Home">01 Home</a></li>
            <li><a href="#Projects" id="#Projects">02 Projects</a></li>
            <li><a href="#AboutMe" id="#AboutMe">03 About Me</a></li>
            <li><a href="#Contact" id="#Contact">04 Contact Me</a></li>
          </ul>
        </div>
      </div>
    )
  } else {
    console.log("Laptop");
    return (
      <div className="navbar">
        <ul>
          <li><a href="#Home" id="#Home" className={navLocation === '#Home' ? (isWhiteBackground ? 'active2' : 'active') : 'normal'}>Home</a></li>
          <li><a href="#Projects" id="#Projects" className={navLocation === '#Projects' ? (isWhiteBackground ? 'active2' : 'active') : 'normal'}>Projects</a></li>
          <li><a href="#AboutMe" id="#AboutMe" className={navLocation === '#AboutMe' ? (isWhiteBackground ? 'active2' : 'active') : 'normal'}>About Me</a></li>
          <li><a href="#Contact" id="#Contact" className={navLocation === '#Contact' ? (isWhiteBackground ? 'active2' : 'active') : 'normal'}>Contact Me</a></li>
        </ul>
      </div>
    )
  }
}

export default Navbar