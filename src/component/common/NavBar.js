import React from 'react'
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    
<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
  <Link className="navbar-brand" to={"/"}>SBR Student Management</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link active" to={"/view-students"}>View All Students</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/add-student"}>Add New Student</Link>
      </li>
    </ul>
  </div>
</nav>

  )
}

export default NavBar
