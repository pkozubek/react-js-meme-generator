import React from "react";
import './image.css'

class Image extends React.Component {
  
  constructor(props){
    super(props);
  }

  render() {
    return (
      <img value ={this.props.value} onClick={ ()=>{console.log('click'+this.props.value)} } className={this.props.style} src={this.props.source}/>
    );
  }
}

export default Image;
