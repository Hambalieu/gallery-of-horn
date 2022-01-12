import React from "react";

import "./HornedBeast.css";

class HornedBeast extends React.Component{
  render(){
    return(
      <article className="child">
        <h2>{this.props.title}</h2>
        <img 
          src={this.props.imageUrl} 
          alt={this.props.title}
          title={this.props.title}
        />
        <p>{this.props.description}</p>

      </article>

    );
  }
}

export default HornedBeast; 
