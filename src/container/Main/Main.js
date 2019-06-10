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

const imageCol = [image1,image2,image3,image4,image5,image6];

class MainComponent extends React.Component {

  state = {
    currentlySelected : 0,
    topText: '',
    bottomText: ''
  }
  
  imageClickHandler=(index)=>{
    this.setState({
        currentlySelected: index
      }
    )
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
    return (
      <main>
          <Images 
            imageClick = {this.imageClickHandler} 
            imageArray = {imageCol} 
            currentlySelected = {this.state.currentlySelected}/>
        <div className = 'visualization'>
          <Input
          name = 'topText'
          type = 'input'
          optionClick = {this.handleOptionsShow}
          val = {this.state.topText}
          change = {this.handleInputChange} 
          delete = {()=>this.resetText('top')}
          description = 'Top text'/>
          <ReactCanvas 
          image = {imageCol[this.state.currentlySelected]}
          width = '400'
          height = '400'
          topText = {this.state.topText}
          bottomText = {this.state.bottomText}
          />
          <Input 
          name = 'bottomText'
          type = 'input'
          optionClick = {this.handleOptionsShow} 
          val = {this.state.bottomText}
          delete = {()=>this.resetText('bottom')}
          change = {this.handleInputChange}
          description = 'Bottom text'/>
          <CustomizationForm/>
          <Button type = 'success'>Generate!</Button>
        </div>
      </main>
    )
  }
}

export default MainComponent;
