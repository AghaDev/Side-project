import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex px-5 py-3 mb-5 text-white">
    <a className="navbar-brand">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link"> <Link className='nav-link' to={'/'}>Home</Link> <span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link"><Link className='nav-link' to={'/login'}>Log in</Link> </a>
        </li>
        <li className="nav-item">
          <a className="nav-link"><Link className='nav-link' to={'/Register'}>Register</Link> </a>
        </li>
        <li className="nav-item">
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
      </form>
    </div>
  </nav></div>
  )
}

export default Navbar