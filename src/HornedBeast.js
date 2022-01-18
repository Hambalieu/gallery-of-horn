import React from "react";
import Card from "react-bootstrap/Card";
import "./HornedBeast.css";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0
    }
  }

  handleFavorites = () => {
    this.setState({
      favorites: this.state.favorites + 1
    });
    this.props.handleShowModal(this.props.beast);
  }

  render() {
    return (
      <Card style={{ width: '40%' }}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>♥️:{this.state.favorites}</Card.Text>
          <Card.Img onClick={this.handleFavorites}
            src={this.props.imageUrl}
            alt={this.props.title}
            title={this.props.title}
          />
          <Card.Text>{this.props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast; 
