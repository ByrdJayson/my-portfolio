import React from 'react'
function NavBar() {
    return (
        <nav>
            <div className='logo-container'>            
                <img src='logo-white.png' alt='company logo'/>
            </div>
            <ul className='nav-links'>
                <li><a href='#' className='active'>WHAT I DO</a></li>
                <li><a href='#'>SERVICES</a></li>
                <li><a href='#'>GET IN CONTACT</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;
