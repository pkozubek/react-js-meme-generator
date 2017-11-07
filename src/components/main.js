import React from "react";

import ReactButton from './reactButton'
import ReactCanvas from './reactCanvas'
import Image from './image'

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

  _handleInputChange(){
    
  }

  render() {

    return (
      <div>
        <div>
          {this.imageCol.map((e,index) => {
            return <Image onClick={ ()=> this._handleImageClick(index) } value ={index} source={this.imageCol[index]} key={index} style={this._returnState(index)} />
          })}
        </div>
        <div>
          {console.log(this.state.indexOfImage)}
          <ReactCanvas image={this.imageCol[this.state.indexOfImage]} topText={this.state.topText} lowsign={'cos'}/>
        </div>
        <div>
          <input/><ReactButton name='remove'/>
          <input/><ReactButton name='remove'/> <br/>
          <ReactButton name='generate meme'/>
        </div>
      </div>
    );
  }
}

export default MainComponent;
