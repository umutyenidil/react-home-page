import './NavBar.css';

import React from "react";


const NavBar = () => {
    return <nav>
        <div className='menu'>
            <div className='logo'>
                <a href='test.com'>Umut Yenidil</a>
            </div>
            <ul>
                <li><a href='test.com'>Home</a></li>
                <li><a href='test.com'>About</a></li>
                <li><a href='test.com'>Services</a></li>
                <li><a href='test.com'>Contact</a></li>
                <li><a href='test.com'>Feedback</a></li>
            </ul>

        </div>
    </nav>
}

export default NavBar;