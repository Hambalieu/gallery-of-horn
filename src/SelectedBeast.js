import React from "react";
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {
  render() {
    return (
        <Modal
          show={this.props.show}
          onHide={this.props.handleCloseModal}
          centered
          size="med"
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.currentBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              style={{ width: '100%' }}
              src={this.props.currentBeast.image_url}
              className="modal-90w"
              alt={this.props.currentBeast.title}
            />
            {this.props.currentBeast.description}
          </Modal.Body>
        </Modal>
    );
  }
}

export default SelectedBeast;
