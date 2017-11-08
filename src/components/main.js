import React from "react";

import ReactButton from './reactButton'
import ReactCanvas from './reactCanvas'
import Image from './image'
import './main.css'
import image1 from './img/sad.jpg'
import image2 from './img/mad.jpg'
import image3 from './img/fry.jpg'
import image4 from './img/jobs.jpg'
import image5 from './img/phone.jpg'
import image6 from './img/wonka.jpg'


class MainComponent extends React.Component {
  
  constructor(){
    super();
    
    this.imageCol = [image1,image2,image3,image4,image5,image6]

    this.state={
        indexOfImage : 2,
        topText: '',
        lowText: ''
    };

    this._handleLowInputChange = this._handleLowInputChange.bind(this);
    this._handleTopInputChange = this._handleTopInputChange.bind(this);
  }
 
  _returnState(index){
    if(index !== this.state.indexOfImage)
      return 'unmarked'
    else
      return 'marked';  
  }
  
  _handleImageClick(index){
    this.setState({
      indexOfImage: index
    });
  }

  _handleTopInputChange(event){
    this.setState({
      topText:  event.target.value
    })
  }

  _handleLowInputChange(event){
    this.setState({
      lowText:  event.target.value
    })
  }

 _resetInput(input){
    if(input=='lowInput'){
      this.setState({
        lowText : ""
      })
    }
    else if(input == 'topInput'){
      this.setState({
        topText : ""
      })
    }
  }

  _handleSaveButton(){
    var canvas = document.getElementById('memesCanvas');
    var canvasimage=document.createElement("img");
    canvasimage = canvas.toDataURL('image/png');

   const w = window.open('about:blank','img');
    w.document.write('<iframe src="' + canvasimage + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>')
    
  }

  render() {

    return (
      <div>
      <header className="App-header">
        <h1>Meme generator</h1>
      </header>
      <main>
        <div>
          {this.imageCol.map((e,index) => {
            return <Image onClick={ ()=> this._handleImageClick(index) } value ={index} source={this.imageCol[index]} key={index} style={this._returnState(index)} />
          })}
        </div>
        <div>
          <ReactCanvas image={this.imageCol[this.state.indexOfImage]} topText={this.state.topText} lowText={this.state.lowText}/>
        </div>
        <div>
          <input maxLength='30' value ={this.state.topText} onChange={this._handleTopInputChange} placeholder='top text' type='text'/>
          <ReactButton onClick={() => this._resetInput('topInput')} styleName={'remove'} name='remove'/>
          <input maxLength='30' value ={this.state.lowText} onChange={this._handleLowInputChange} placeholder='low text'  type='text'/>
          <ReactButton onClick={() => this._resetInput('lowInput')} styleName={'remove'} name='remove'/><br/>
          <ReactButton onClick={() => this._handleSaveButton()} styleName={'generate-meme'} name='generate meme'/>
        </div>
      </main>
      </div>
    );
  }
}

export default MainComponent;
