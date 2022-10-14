import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
      <nav id="nav" className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
              <Link to="/" className="navbar-brand" alt="koti"><span>ホーム</span></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <Link to="/exchange" className="nav-link"><span>e x c h a n g e &nbsp; r a t e</span></Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/movies" className="nav-link"><span>m o v i e s</span></Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}
