import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json'
import "./App.css";


class App extends React.Component {
  render(){
    return (
      <>
        <Header />
        <Main data={data}/>
        <Footer />
      </>
    )
  }
}

export default App;
