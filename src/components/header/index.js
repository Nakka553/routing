import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Header = () => {

  const navigate = useNavigate()
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <Link class="navbar-brand" href="#"><img src='./images/primary_logo.webp' style={{ height: '50px', width: '100px' }} /></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link text-primary" to="/home" style={{ fontWeight: 'bold' }}>Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-primary" to="/about" style={{ fontWeight: 'bold' }}>About</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link text-primary" to='/contact' style={{ fontWeight: 'bold' }}>Contact</Link>
              </li>
            </ul>
            <form class="d-flex jistify-content-between" role="search">

              <button class="btn btn-outline-primary" type="submit" onClick={() => { navigate('/login') }}>SignIn</button>
              <button class="btn btn-outline-primary" type="submit" onClick={() => { navigate('/signup') }}>SignUp</button>
            </form>
          </div>

        </div>
      </nav>
    
    </div>
  )
}

export default Header;