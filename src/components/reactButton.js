import React from "react";

class ReactButton extends React.Component {
  
  render() {
    return (
      <button>{this.props.name}</button>
    );
  }
}

export default ReactButton;
