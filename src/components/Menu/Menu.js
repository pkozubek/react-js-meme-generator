import React from 'react';
import {NavLink} from 'react-router-dom';
import Styles from './Menu.module.css';

const menu = (props)=>{


    return (
    <div className = {Styles.Menu}>
        <nav>
            <NavLink className = {Styles.MenuItem} activeClassName={Styles.ActiveItem} exact to = '/'>Meme Generator</NavLink>
            <NavLink className = {Styles.MenuItem} activeClassName={Styles.ActiveItem} to = '/history'>History</NavLink>
        </nav>
    </div>
    );
}

export default menu;