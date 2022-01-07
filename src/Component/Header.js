import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-around">
            <div className="navbar-nav display-4">
              <Link to='/home' className="nav-link active px-5" href="#">Home <span className="sr-only">(current)</span></Link>
              <Link to='/student' className="nav-link px-5" href="#">Student</Link>
              <Link to='/contact' className="nav-link px-5" href="#">Contact-us!</Link>
        </div>
        </nav>
    )
}
export default Header
// d-flex justify-content-around display flex property justify content space around
// display-4 font size
// px-5  padding element // not needed collapse navbar-collapse 