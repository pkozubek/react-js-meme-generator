import React from "react";
import findDOMNode from "react-dom";
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
    this._updateCanvas();
  }

  componentDidUpdate(){
    this._updateCanvas();
  }
  
  _updateCanvas(){ 
    this.ctxImage.src=this.state.currentImage;
    this.ctx.drawImage(this.ctxImage,0,0);
  }

  render() {
    return (
      <canvas id='memesCanvas'/>
    );
  }
}

export default ReactCanvas;
