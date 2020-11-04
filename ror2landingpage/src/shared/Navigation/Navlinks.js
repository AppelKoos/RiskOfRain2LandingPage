import React from 'react'
import {NavHashLink} from 'react-router-hash-link'

import './Navlinks.css'

const Navlinks = () =>{

    return <ul className="nav-links">
        <li>
            <NavHashLink smooth to="/#home-top" > Home </NavHashLink>
        </li>
        <li>
            <NavHashLink smooth to="/#about-game" >About</NavHashLink>
        </li>
        <li>
            <NavHashLink smooth to="/#key-features-images"> Key Feaures</NavHashLink>
        </li>
        <li>
            <NavHashLink smooth to="/#media-video"> Media</NavHashLink>
        </li>
    </ul>
}
export default Navlinks