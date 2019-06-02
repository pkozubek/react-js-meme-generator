import React from 'react';
import styles from './Backdrop.module.css';

const backdrop = (props)=>{
    return props.show ? <div onClick = {props.click} className = {styles.Backdrop}></div> : null;
}

export default backdrop;