import React from "react";

import ReactButton from './reactButton'
import ReactCanvas from './reactCanvas'

class MainComponent extends React.Component {
  
  constructor(){
    super();

    this.imageCol = ['http://bestmememaker.weebly.com/uploads/4/1/0/7/41076499/8585768_orig.jpg'],
    this.state={
        currentImage : this.imageCol[0]
    };
  }
  
  render() {

    return (
      <div>
        <div>
          <ReactCanvas image={this.state.currentImage}/>
        </div>
        <div>
          <input/> 
          <input/> 
          <ReactButton/>
        </div>
      </div>
    );
  }
}

export default MainComponent;
