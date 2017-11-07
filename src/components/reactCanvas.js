import React from "react";
import './reactCanvas.css';

class ReactCanvas extends React.Component {
  
  constructor(props){
    super(props);
    
    this.canvas , this.ctx , this.ctxImage = new Image();
    this.state={
        currentImage: this.props.image
    }
  }

  componentDidMount(){
    this.canvas = document.getElementById('memesCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.font = '16px Verdana';
    this.ctx.fillStyle = 'white';
    this._updateCanvas();
  }

  componentDidUpdate(){
    this.ctxImage.src=this.state.currentImage;
    this.ctx.drawImage(this.ctxImage,0,0,this.canvas.width,this.canvas.height);
    this._drawText(this.props.topText,20,20);
    this._drawText(this.props.lowText,20,this.canvas.height-20);
  }

  componentWillReceiveProps(){
      this.setState({
          currentImage: this.props.image
      })
  }
  
  _updateCanvas(){ 
    this.ctxImage.src=this.state.currentImage;
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
