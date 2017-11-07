import React from "react";
import findDOMNode from "react-dom";
import './reactCanvas.css';

class ReactCanvas extends React.Component {
  
  constructor(props){
    super(props);
    
    var canvas , ctx , img = new Image();

    this.state={
        currentImage: props.image
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
    console.log(this.img);
    //this.img.src='https://images-cdn.9gag.com/photo/azbEgBK_700b_v1.jpg';
    //this.ctx.drawImage(this.img,0,0);
  }

  render() {
    return (
      <canvas id='memesCanvas'/>
    );
  }
}

export default ReactCanvas;
