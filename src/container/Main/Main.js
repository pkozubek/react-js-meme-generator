import React from "react";
import Input from '../../components/Input/Input';

import './Main.css'

import image1 from '../../assets/img/sad.jpg';
import image2 from '../../assets/img/mad.jpg';
import image3 from '../../assets/img/fry.jpg';
import image4 from '../../assets/img/jobs.jpg';
import image5 from '../../assets/img/phone.jpg';
import image6 from '../../assets/img/wonka.jpg';

import Images from '../../components/Images/Images';
import ReactCanvas from '../../components/Canvas/ReactCanvas';
import CustomizationForm from '../../components/CustomizationForm/CustomizationForm'
import Button from '../../components/Button/Button';
import Info from '../../components/Info/Info';
import {connect} from 'react-redux';

const imageCol = [image1,image2,image3,image4,image5,image6];

class MainComponent extends React.Component {

  state = {
    topText: '',
    bottomText: ''
  }

  handleInputChange = (event)=>{
    this.setState({
      [event.target.name] : event.target.value
    });
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

    let main = (<div className = 'visualization'>
    <Input
    name = 'topText'
    position = 'Top'
    type = 'input'
    optionClick = {this.handleOptionsShow}
    val = {this.state.topText}
    change = {this.handleInputChange} 
    delete = {()=>this.resetText('top')}
    description = 'Top text'/>
    <ReactCanvas 
    width = '400'
    height = '400'
    topText = {this.state.topText}
    bottomText = {this.state.bottomText}
    />
    <Input 
    name = 'bottomText'
    position = 'Bottom'
    type = 'input'
    optionClick = {this.handleOptionsShow} 
    val = {this.state.bottomText}
    delete = {()=>this.resetText('bottom')}
    change = {this.handleInputChange}
    description = 'Bottom text'/>
    <CustomizationForm/>
    <Button type = 'success'>Generate!</Button>
    </div>);
    
    if(this.props.selectedImage === null){
      main = <Info/>
    }

    return (
      <main>
          <Images imageArray = {imageCol}/>
          {main}
      </main>
    )
  }
}

const mapStateToProps = state =>{
  return{
    selectedImage: state.image
  }
}

export default connect(mapStateToProps)(MainComponent);
