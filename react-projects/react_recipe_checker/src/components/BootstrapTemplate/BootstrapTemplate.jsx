import React from 'react'
import './BootstrapTemplate.css'


const BootstrapTemplate = () => {
  return (
    <>

      <div className="bg">

        <div className='header'>
          <div className="logo">Start Bootstrap</div>
          <div className="navTabs"><a href="">About</a><a href="">Services</a><a href="">Portolio</a><a href="">Contact</a></div>
        </div>

        <div className="mainContainer">
          <h1 className="mainTitle">
            Your Favourite Place for Free Bootstrap Themes
          </h1>
          <hr className="hr" />
          <span className="mainDescription"> Start Bootstrap can help you build better websitese using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</span>
          <br />
          <button
            className="myButton">FIND OUT MORE</button>
        </div>
      </div>
    </>
  )
}

export default BootstrapTemplate