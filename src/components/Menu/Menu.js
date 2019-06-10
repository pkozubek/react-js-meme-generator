import React from 'react';
import {NavLink} from 'react-router-dom';
import Styles from './Menu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinTears } from '@fortawesome/free-solid-svg-icons';
 
const menu = (props)=>{
    return (
    <div className = {Styles.Menu}>
        <nav>
            <div className = {Styles.SiteName}>
                <FontAwesomeIcon className = {Styles.Logo} icon={faGrinTears}/>
                <i>MEME GENERATOR</i>
            </div>
            <NavLink className = {Styles.MenuItem} activeClassName={Styles.ActiveItem} exact to = '/'>Meme Generator</NavLink>
            <NavLink className = {Styles.MenuItem} activeClassName={Styles.ActiveItem} to = '/history'>History</NavLink>
        </nav>
    </div>
    );
}

export default menu;