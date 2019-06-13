import React from "react";
import './ReactCanvas.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

//const WIDTH = 500;
//const HEIGHT = 500;

class ReactCanvas extends React.Component {

  constructor(){
    super();
    this.image = new Image();    
    this.ctx = null;
  }

  drawText = (text,y)=>{
    let currentX = (this.props.width/2) ;
    this.ctx.textAlign = "center"; 
    this.ctx.fillText(text,currentX,y);
    this.ctx.strokeText(text,currentX,y);
  }
 
  redrawCanvas = ()=>{
    this.ctx.font = "30px Baloo Da";
    //this.ctx.fillStyle = 'white';
    this.image.src = this.props.selectedImage;
    
    this.image.onload=()=>{
      this.ctx.drawImage(this.image,0,0, this.props.width, this.props.height);
      
      this.ctx.font = this.props.topFontSize + "px Baloo Da";
      this.ctx.fillStyle = this.props.colorTop;
      this.drawText(this.props.topText,60);

      this.ctx.font = this.props.bottomFontSize + "px Baloo Da";
      this.ctx.fillStyle = this.props.colorBottom;
      this.drawText(this.props.bottomText,360);
    }
  }

  componentDidMount(){
    this.refs.canvas.width = this.props.width;
    this.refs.canvas.height = this.props.height;
    this.ctx = this.refs.canvas.getContext('2d');

    this.redrawCanvas();
  }
  
  componentDidUpdate(){
    this.redrawCanvas();
  }



  render() {

    if(this.refs.canvas !== undefined && this.props.isSaved){
      const img = this.refs.canvas.toDataURL("image/jpeg", 1.0);
      const link = document.createElement('a');
      link.download = "memeGeneratorImage.png";
      link.href = img;
      link.click();
      this.props.saveImage(false);
      this.props.showHistoryConfirmation();
    }

    return (
      <div>
        <canvas ref="canvas"  />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    saveImage: (shouldBeSaved) => dispatch(actions.saveImage(shouldBeSaved)),
    showHistoryConfirmation: () => dispatch(actions.showHistorySave())
  }
}

const mapStateToProps = (state)=>{
  return{
    selectedImage: state.image,
    colorTop: state.colorTop,
    colorBottom: state.colorBottom,
    topFontSize: state.sizeTop,
    bottomFontSize: state.sizeBottom,
    isSaved: state.saveImage,
    topText: state.topText,
    bottomText: state.bottomText
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReactCanvas);
