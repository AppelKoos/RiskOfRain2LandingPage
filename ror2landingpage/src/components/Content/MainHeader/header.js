import React from 'react';

import classes from './header.module.css'
import testGif from '../../../Assets/Gifs/elmo.gif'
import RoR2Logo from '../../../Assets/RoR2Images/ror2_logo_512-1.png'
import Buylinks from '../BuyLinks/buylinks'


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
        <div style={backgroundStyling} >
            <div className={classes.Emptyspace} />
            <img className={classes.Logo} src={RoR2Logo} alt="Main logo not found" />
            <div className={classes.Emptyspace} />
            <Buylinks classname={classes.BuyLinks} />
        </div>
    )
    // <img src={testGif} alt="Burn the world -elmo" />
}
export default header;