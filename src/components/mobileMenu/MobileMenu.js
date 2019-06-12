import React from 'react';
import {NavLink} from 'react-router-dom';
import Styles from './MobileMenu.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinTears, faHistory } from '@fortawesome/free-solid-svg-icons';

const mobileMenu = (props)=>{
    return(
        <div className = {Styles.MobileMenu}>
            <NavLink className = {Styles.MenuItem} activeClassName={Styles.ActiveItem} exact to = '/'>
            <FontAwesomeIcon className = {Styles.Logo} icon={faGrinTears}/>
                Meme Generator</NavLink>
            <NavLink className = {Styles.MenuItem} activeClassName={Styles.ActiveItem} to = '/history'>
            <FontAwesomeIcon className = {Styles.Logo} icon={faHistory}/>
                History</NavLink>
        </div>
    )
}

export default mobileMenu;