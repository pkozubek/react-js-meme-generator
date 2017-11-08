import React from "react";
import './reactCanvas.css';

class ReactCanvas extends React.Component {
  
  constructor(props){
    super(props);
    
    this.canvas , this.ctx , this.ctxImage = new Image();
  }

  componentDidMount(){
    this.canvas = document.getElementById('memesCanvas');
    this.canvas.width = 400;
    this.canvas.height = 400;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.font = '20px Verdana';
    this.ctx.fillStyle = 'white';
    this.ctxImage.src=this.props.image;
    this._updateCanvas();
  }

  componentDidUpdate(){
    this.ctxImage.src=this.props.image;
    this.ctx.drawImage(this.ctxImage,0,0,this.canvas.width,this.canvas.height);
    this._drawText(this.props.topText,20,20);
    this._drawText(this.props.lowText,20,this.canvas.height-20);
  }
  
  _updateCanvas(){ 
    this.ctx.drawImage(this.ctxImage,0,0,this.canvas.width,this.canvas.height);
    this._drawText(this.props.topText,20,20);
  }

  _drawText(text,x,y){
    this.ctx.fillText(text,x,y);
    this.ctx.strokeText(text,x,y);
  }

  render() {
    return (
      <canvas id='memesCanvas'/>
    );
  }
}

export default ReactCanvas;
