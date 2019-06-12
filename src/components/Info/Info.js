import React from 'react';
import './Info.css';

const info = (props)=>{
    return(
        <div className = 'Info'>
           <ol>
               <li>Choose image</li>
               <li>Write some text and style it!</li>
               <li>Save it</li>
               <li>Have fun! :)</li>
           </ol>
        </div>
    );
}

export default info;