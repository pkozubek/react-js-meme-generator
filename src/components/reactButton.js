import React from "react";

class ReactButton extends React.Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <button>{this.props.name}</button>
    );
  }
}

export default ReactButton;
