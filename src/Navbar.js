import React from 'react';
export default function Navbar() {
     return(
        <div>
            <ul className="topnav">
             <li><a className="active" href="#home">Home</a></li>
             <li><a href="#news">News</a></li>
             <li><a href="#contact">Contact</a></li>
             <li className="right"><a href="#about">About</a></li>
            </ul>
        </div>

    )
}