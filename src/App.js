import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Data from './data.json';
import SelectedBeast from './SelectedBeast.js';


import "./App.css";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBeast:'',
      beast: {},
      show: false,
      allData: Data,
      
    }
  }

  handleShowModal = (beast) => {
    this.setState({
      show: true,
      currentBeast: beast
    })
  }

  handleCloseModal = () => {
    this.setState({
      show: false
    })
  }
  
  filterBeast = (allData)=>{
    this.setState({
      allData:allData
    });
  }


  render() {
    console.log(this.state.currentBeast);
    return (
      <>
        <Header />
        <SelectedBeast
          handleShowModal={this.handleShowModal}
          show={this.state.show}
          handleCloseModal={this.handleCloseModal}
          currentBeast={this.state.currentBeast}
        />
        <Main allData={Data}
          handleShowModal={this.handleShowModal}
          filterBeast={this.filterBeast}
        />
        <Footer />
      </>
    )
  }
}

export default App;
