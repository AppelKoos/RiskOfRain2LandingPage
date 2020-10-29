import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import MainHeader from './MainHeader'
import NavLinks from './Navlinks'
import SideDrawer from './SideDrawer'

import './MainNavigation.css'
import Backdrop from '../UI/Backdrop'

const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const OpenDrawerHandler = () => {
        setDrawerIsOpen(true)
    }

    const CloseDrawerHandler = () => {
        setDrawerIsOpen(false)
    }

    return (
        <React.Fragment>
            {drawerIsOpen && <Backdrop onClick={CloseDrawerHandler} />}
            <SideDrawer show={drawerIsOpen} onClick={CloseDrawerHandler} >
                <nav className="main-navigation__drawer-nav" >
                    <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={OpenDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <nav className="main-navigation__header-nav" >
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}
export default MainNavigation