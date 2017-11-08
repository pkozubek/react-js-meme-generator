import React from "react";

import ReactButton from './reactButton'
import ReactCanvas from './reactCanvas'
import Image from './image'
import './main.css'

class MainComponent extends React.Component {
  
  constructor(){
    super();
    this.imageCol = ['http://bestmememaker.weebly.com/uploads/4/1/0/7/41076499/8585768_orig.jpg',
  'https://memegenerator.net/img/images/250x250/166088/y-u-no.jpg',
  'https://imgflip.com/s/meme/Creepy-Condescending-Wonka.jpg',
'https://i.imgflip.com/17r4mi.jpg',
'https://imgflip.com/s/meme/Steve-Jobs.jpg',
'https://imgflip.com/s/meme/Futurama-Fry.jpg']
    this.state={
        indexOfImage : 0,
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
    console.log(canvas);
    
    var canvasimage=document.createElement("img");
    canvasimage.setAttribute('crossOrigin','anonymous');
    canvasimage = canvas.toDataURL('image/png');
    canvasimage.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
    alert(canvasimage);
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
