import React from 'react';

import testGif from '../../../Assets/Gifs/elmo.gif'
import RoR2Logo from '../../../Assets/RoR2Images/ror2_logo_512-1.png'
import Buylinks from '../BuyLinks/buylinks'

import './TopLogo.css'

const header = () => {
    const backgroundStyling = {
        //background: 'url(' + testGif + ') center no-repeat',
        background: 'center no-repeat',
        backgroundColor: 'dimgrey',
        backgroundPosition: 'top',
        height: '100vh',
        width: '100%'
    }
    return (
        <div id="home-top" style={backgroundStyling} >
            <div className={'Emptyspace'} />
            <img className={'Logo'} src={RoR2Logo} alt="Main logo not found" />
            <div className={'Emptyspace'} />
            <Buylinks classname={'BuyLinks'} />
        </div>
    )
    // <img src={testGif} alt="Burn the world -elmo" />
}
export default header;