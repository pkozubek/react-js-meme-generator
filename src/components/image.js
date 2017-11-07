import React from "react";
import './image.css'

class Image extends React.Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <img className={this.props.style} src={this.props.source}/>
    );
  }
}

export default Image;
