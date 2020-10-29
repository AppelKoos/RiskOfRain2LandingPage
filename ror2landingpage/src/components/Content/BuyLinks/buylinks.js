import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core'

import 'fontsource-roboto';
import './buylinks.css'

/*
ps4 https://store.playstation.com/en-us/product/UP0292-CUSA16153_00-RISKOFRAIN2SIEA0
xbox https://www.microsoft.com/en-us/p/risk-of-rain-2/9p6f6tbggvk3
switch https://www.nintendo.com/games/detail/risk-of-rain-2-switch/#game-info
steam https://store.steampowered.com/app/632360/Risk_of_Rain_2/
stadia https://stadia.google.com/u/1/store/details/7b6d79b833354dcaa9b2461086a7763crcp1/sku/5470776eda9b4270b049f081c6bc07ce
*/

const buylinks = (props) => {
    return (
        <div className={props.classname} >
            <h3>
                Buy the game now on:
            </h3>
            <ButtonGroup variant="contained">
                <Button > Steam </Button>
                <Button > Xbox </Button>
                <Button > PS4 </Button>
                <Button > Switch </Button>
                <Button > Stadia </Button>
            </ButtonGroup>
            <h5>
                Disclaimer:
                <br /> I am not affialated with this game and I only included links to make the site feel complete.
                <br /> PLEASE do not buy these games after using the link from the buttons, please go to the official RoR2 website if you want to purchase the game
            </h5>
        </div>
    )
}
export default buylinks