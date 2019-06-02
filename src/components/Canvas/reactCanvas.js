import React from "react";
import './ReactCanvas.css';

const WIDTH = 350;
const HEIGHT = 350;

class ReactCanvas extends React.Component {

  constructor(){
    super();
    this.image = new Image();    
    this.ctx = null;
  }

  drawText = (text,y)=>{
    let characterSize = 6;
    let currentX = (WIDTH/2) - (text.length * characterSize);
    this.ctx.fillText(text,currentX,y);
    this.ctx.strokeText(text,currentX,y);
  }
 
  redrawCanvas = ()=>{
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = 'white';
    this.image.src = this.props.image;
    
    this.image.onload=()=>{
      this.ctx.drawImage(this.image,0,0, this.props.width, this.props.height);
      this.drawText(this.props.topText,60);
      this.drawText(this.props.bottomText,360);
    }
  }

  componentDidMount(){
    this.refs.canvas.width = WIDTH;
    this.refs.canvas.height = HEIGHT;
    this.ctx = this.refs.canvas.getContext('2d');

    this.redrawCanvas();
  }
  
  componentDidUpdate(){
    this.redrawCanvas();
  }

  render() {
    return (
      <div>
        <canvas ref="canvas"  />
      </div>
    );
  }
}

export default ReactCanvas;
