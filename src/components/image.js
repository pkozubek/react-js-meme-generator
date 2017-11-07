import React from "react";
import './image.css'

class Image extends React.Component {

  render() {
    return (
      <img alt={'image' + this.props.valiue} onClick={this.props.onClick} value ={this.props.value} className={this.props.style} src={this.props.source}/>
    );
  }
}

export default Image;
