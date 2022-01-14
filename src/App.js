import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import Form from 'react-bootstrap/Form';
import SelectedBeast from './SelectedBeast.js';

import "./App.css";
import { Container } from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      beast: {},
      allData: data
    }
  }

  handleShowModal = (beast) => {
    this.setState({
      show: true,
      beast
    })
  }

  handleCloseModal = () => {
    this.setState({
      show: false
    })
  }

  // handleNumberHorns = event => {
  //   let newNumsArr = totalImageArray;
  //   let selected = event.target.horns;

  //   this.setState({
  //     selected: event.target.horns
  //   })
  // }

  render() {
    console.log(this.state);
    return (
      <>
        <Header />

        <Container>
          <Form>
            <Form.Group controlId="selected">
              <Form.Label>Beast with How many Horns would you like to see!</Form.Label>
              <Form.Select onChange={this.handleNumberHorns}>
                <option>Make a Choice</option>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
                <option value="hundred">Hundred</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Container>

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
