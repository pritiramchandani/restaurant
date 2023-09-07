import React from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container">
    <a className="navbar-brand" href="#">
        <img src='/images/logo.png'></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav mx-auto ">
        <li className="nav-item ms-5">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link" href="aboutus">About us</a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link" href="menu">Menu</a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link" href="#">Feedback</a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link" href="contact">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
