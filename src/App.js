import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';

import "./App.css";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show:false,
      beast:{},
      allData:data
    }
  }

  handleShowModal = (beast) => {
    this.setState({
      show:true,
      beast
    })
  }

  handleCloseModal = () => {
    this.setState({
      show: false
    })
  }

  render(){
    return (
      <>
        <Header />
        <SelectedBeast
          show={this.state.show}
          handleCloseModal={this.handleCloseModal}
          beast={this.state.beast}
        />
        <Main allData={this.state.allData}
          handleShowModal={this.handleShowModal}
        />
        <Footer />
      </>
    )
  }
}

export default App;
