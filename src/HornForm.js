import React from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

class HornForm extends React.Component {

  // handleSelect = event => {

  //   // let numOfHorns = parseInt(event.target.value);
  //   // console.log(numOfHorns);
  //   // let newSelection = this.props.allData.filter(obj =>
  //   //   obj.horns === numOfHorns);
  //   // let beastsToShow = numOfHorns ? newSelection : this.props.allData

  //   // this.props.filterBeast(beastsToShow)
  //   this.setState({
  //     beastsToShow: numOfHorns ? newSelection : this.props.allData
  //   })
  // }



  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="selector">
            <Form.Label>Beast with How many Horns would you like to see!</Form.Label>
            <Form.Select onChange={(event)=> this.props.handleSelect(event.target.value)}>
              <option>Make a Choice</option>
              <option value="1">1 Horn</option>
              <option value="2">2 Horns</option>
              <option value="3">3 Horns</option>
              <option value="100">3+ Horns</option>
              <option value="0">Show all Beasts</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Container>
    )
  }
}

export default HornForm;


