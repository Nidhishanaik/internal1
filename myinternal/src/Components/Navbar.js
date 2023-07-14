import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
  <>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
        <div>
            <div>
        <Link to="/" class="navbar-brand">BALMANDIR HIGH SCHOOL</Link>
        </div>
            
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link to="/" class="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contactus" class="nav-link">login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/workit" class="nav-link">Work It</Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio" class="nav-link">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/tutorial" class="nav-link">Tutorial</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contactus" class="nav-link">Contact Us</Link>
                </li>
            </ul>
        </div>
        </div>
        </nav>
        <img src="data:image/jpeg;base64,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" alt='Loading' height="300px"></img>
            
    </>

  )
}

export default Navbar