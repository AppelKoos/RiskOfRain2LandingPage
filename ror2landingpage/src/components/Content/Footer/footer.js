import React from 'react';
import classes from './footer.module.css'
import hopooLogo from '../../../Assets/RoR2Images/hopoo_logo.png'
import playLogo from '../../../Assets/RoR2Images/play_logo_60.png'
import gearboxLogo from '../../../Assets/RoR2Images/gearbox_publishing_h_60.png'
import esrbRating from '../../../Assets/RoR2Images/esrb_t.jpg'

const footer = () => {
    return (
        <div className={classes.container} >
            <div className={classes.LegalLinks}>
                <p> Legal -links go here</p>
            </div>
            <div className={classes.CompanyLogos} >
                <p>company logos -here are the company logos</p>
                <img src={hopooLogo} alt="Hopoo logo" />
                <img src={playLogo} alt="play logo" />
                <img src={gearboxLogo} alt="gearbox publishing logo" />
            </div>
            <div className={classes.Rating}>
                <p> rating info goes here</p>
                <img src={esrbRating} alt="very violont Omoga" />
            </div>
        </div>
    )
}
export default footer