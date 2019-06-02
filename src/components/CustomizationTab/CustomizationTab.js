import React from 'react';
import './CustomizationTab.css';

const customizationTab = (props)=>{
    return <div className = 'CustomizationTab'>
        <h2>{props.header}</h2>
        {props.children}
    </div>
}

export default customizationTab;