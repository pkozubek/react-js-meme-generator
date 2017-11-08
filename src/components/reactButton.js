import React from "react";
import './reactButton.css';

class ReactButton extends React.Component {
  
  _styleButton(name) {
    if(name != 'remove')
      return name;
    else
      return <img src='https://cdn1.iconfinder.com/data/icons/nuove/128x128/actions/fileclose.png'/>;
    }
  

  render() {
    return (
      <button className={this.props.styleName}>
        { this._styleButton(this.props.name)
        }
        </button>
    );
  }
}

export default ReactButton;
