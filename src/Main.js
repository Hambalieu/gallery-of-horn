import React from "react";
import HornedBeast from "./HornedBeast.js";
import HornForm from "./HornForm.js";

import "./Main.css";

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      beastsToShow: this.props.allData
    }
  }

  handleSelect = (numOfHorns) => {
   
    numOfHorns = parseInt(numOfHorns);
    console.log(numOfHorns);
    let newSelection = this.props.allData.filter(obj => {
      if (obj.horns === numOfHorns) return obj
    });
    console.log(newSelection);
    this.setState({
      beastsToShow: numOfHorns ? newSelection : this.props.allData
    })
    console.log(this.state);
  }

  render(){
    let totalImageArray = this.state.beastsToShow.map((beast,index) => (
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
        <HornForm handleSelect={this.handleSelect}/>
        {totalImageArray}
      </main>
    );
  }
}

export default Main; 
