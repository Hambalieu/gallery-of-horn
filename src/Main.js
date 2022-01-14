import React from "react";
import HornedBeast from "./HornedBeast.js";

import "./Main.css";

class Main extends React.Component{
  render(){
    let totalImageArray = this.props.allData.map((beast,index) => (
      <HornedBeast
       key={index}
       handleShowModal={this.props.handleShowModal}
       title={beast.title}
       imageUrl={beast.image_url}  
       description={beast.description}
       beast={beast} 
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
