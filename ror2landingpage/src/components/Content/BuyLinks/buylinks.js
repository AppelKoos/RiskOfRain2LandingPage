import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core'

import 'fontsource-roboto';
import './buylinks.css'

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