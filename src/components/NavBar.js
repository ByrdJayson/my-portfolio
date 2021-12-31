import React from 'react'
function NavBar() {
    return (
        <nav>
            <div className='logo-container'>            
                <img src='../logo2.png' alt='company logo'/>
            </div>
            <ul className='nav-links'>
                <li>WHAT I DO</li>
                <li>GET IN CONTACT</li>
                <li>MY WORK</li>
            </ul>
        </nav>
    )
}

export default NavBar;
