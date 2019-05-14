import React from "react";
import './ReactCanvas.css';

class ReactCanvas extends React.Component {
  
  /*
  constructor(props){
    super(props);
    
    //this.canvas , this.ctx , this.ctxImage = new Image();
    //this.ctxImage.src = this.props.image;
  }
  */

  /*
  componentDidMount(){
    this.canvas = document.getElementById('memesCanvas');
    this.canvas.width = 400;
    this.canvas.height = 400;
    this.ctx = this.canvas.getContext('2d');
    
    //this.forceUpdate();

    this.ctx.font = '20px Verdana';
    this.ctx.fillStyle = 'white';

    this.ctxImage.src=this.props.image;
    
    console.log('i mounted with image ' + this.ctxImage.src);
    this._redrawCanvas();
  }

  componentDidUpdate(){
    console.log('update');
    this.ctxImage.src=this.props.image;
    this._redrawCanvas();
  }
  
  _redrawCanvas(){ 
    console.log('redraw: i am redrawing '+this.ctxImage.src);
    this.ctx.drawImage(this.ctxImage,0,0,this.canvas.width,this.canvas.height);
    this._drawText(this.props.topText,20,20);
    this._drawText(this.props.lowText,20,this.canvas.height-20);
  }

  _drawText(text,x,y){
    this.ctx.fillText(text,x,y);
    this.ctx.strokeText(text,x,y);
  }
  */

  redrawCanvas = ()=>{
    this.refs.canvas.width = 400;
    this.refs.canvas.height = 400;
    
    const ctx = this.refs.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.props.width, this.props.height);
    const image =  new Image();
    image.src = this.props.image;
    
    image.onload=()=>{
      ctx.drawImage(image,0,0, this.props.width, this.props.height);
    }
  }

  componentDidMount(){
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
