import React from "react";
import Input from '../../components/Input/Input';
/*
import ReactButton from '../../components/Button/reactButton'
import ReactCanvas from '../../components/Canvas/reactCanvas'
import Image from '../../components/Image/image'
*/

import './Main.css'

import image1 from '../../assets/img/sad.jpg';
import image2 from '../../assets/img/mad.jpg';
import image3 from '../../assets/img/fry.jpg';
import image4 from '../../assets/img/jobs.jpg';
import image5 from '../../assets/img/phone.jpg';
import image6 from '../../assets/img/wonka.jpg';

import Images from '../../components/Images/Images';
import ReactCanvas from '../../components/Canvas/ReactCanvas';

const imageCol = [image1,image2,image3,image4,image5,image6];

class MainComponent extends React.Component {

  state = {
    currentlySelected : 0,
    topText: '',
    bottomText: ''
  }
  
  imageClickHandler=(index)=>{
    this.setState(
      {
        currentlySelected: index
      }
    )
  }

  handleTopInputChange = (event)=>{
    this.setState({
      topText:  event.target.value
    })
  }

  handleBottomInputChange =(event)=>{
    this.setState({
      bottomText:  event.target.value
    })
  }

  resetText = (place)=>{
    if(place === 'top'){
      this.setState({
        topText:  ''
      });
    }
    if(place === 'bottom'){
      this.setState({
        bottomText:  ''
      });
    }
  }

  render(){
    return (
      <div>      
        <Images 
        imageClick = {this.imageClickHandler} 
        imageArray = {imageCol} 
        currentlySelected = {this.state.currentlySelected}/>
        <Input
        val = {this.state.topText}
        change = {this.handleTopInputChange} 
        delete = {()=>this.resetText('top')}
        description = 'Top text: '/>
        <ReactCanvas 
        image = {imageCol[this.state.currentlySelected]}
        width = '400'
        height = '400'
        topText = {this.state.topText}
        bottomText = {this.state.bottomText}
        />
        <Input 
        val = {this.state.bottomText}
        delete = {()=>this.resetText('bottom')}
        change = {this.handleBottomInputChange}
        description = 'Bottom text: '/>
      </div>
    )
  }
}

export default MainComponent;
