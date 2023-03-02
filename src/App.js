import React from "react";
import Main from './Main';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';
import './App.css';
// import { ModalBody } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
      showModal: false,
      ani: {}
    };
  }

  addHearts = () => {
    this.setState({
      hearts: this.state.hearts + '💖'
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }

  handleOpenModal = (ani) => {
    this.setState({
      showModal: true,
      ani
    });
  }

  render() {
    return (
      <>
        <header>
          <h1>The Animal Kingdom</h1>
        </header>
        <Main
          data={data}
          addhearts={this.addHearts}
          handleOpenModal={this.handleOpenModal}
        />
        <footer>&copy; by Joel Myrtil</footer>
        <Modal
          show={this.state.showModal}
          onHide={this.handleCloseModal}
        >
          <Modal.Body>
            <img
              src={this.state.ani.imageURL}
              width={465} height={500}
              alt={this.state.ani.name}/>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default App;
