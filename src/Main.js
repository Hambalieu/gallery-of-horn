import React from "react";
import HornedBeast from "./HornedBeast.js";

import "./Main.css";


class Main extends React.Component{
  render(){

    let totalImageArray = this.props.data.map((image, index)=> (

      <HornedBeast
       key={index}
       title={image.title}
       imageUrl={image.image_url}  description={image.description}
      />
    ));


    return(
      <main>
        {totalImageArray}
      </main>

    );
  }
}

export default Main; 
