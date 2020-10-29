import React from 'react'
import {NavLink} from 'react-router-dom'

import './Navlinks.css'

const Navlinks = () =>{
    return <ul className="nav-links">
        <li>
            <NavLink to="/#home-top" > Home </NavLink>
        </li>
        <li>
            <NavLink to="/#buylinks-top" > Buy </NavLink>
        </li>
        <li>
            <NavLink to="/#about-game" >About</NavLink>
        </li>
        <li>
            <NavLink to="/#key-features-images"> Key Feaures</NavLink>
        </li>
        <li>
            <NavLink to="/#media-video"> Media</NavLink>
        </li>
    </ul>
}
export default Navlinks