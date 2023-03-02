import React from "react";
import Main from './Main';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';
import ListGroup from "react-bootstrap/ListGroup";
import './App.css';
// import { ModalBody } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
      showModal: false,
      ani: {},
      howToSort: parseInt(''),
      filteredData: data
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

  handleSubmit = (e) => {
    e.preventDefault();
    // let filter = e.target.filter.value
    // console.log(filter);
    // this.setState({
    //   howToSort: filter
    // })
    if (this.state.howToSort === 1) {
      let newData = data.filter(animal => animal.horns === this.state.howToSort);
      this.setState({filteredData: newData})
      console.log(this.setState({filteredData: newData}));
    } else if (this.state.howToSort === 2) {
      let newData = data.filter(animal => animal.horns === this.state.howToSort);
      this.setState({filteredData: newData})
    } else if (this.state.howToSort === 3) {
      let newData = data.filter(animal => animal.horns === this.state.howToSort);
      this.setState({filteredData: newData})
    }
  }


  howSort = (e) => {
    // console.log(e.target.value)
    this.setState({
      howToSort: parseInt(e.target.value)
    })
  }

  render() {

    // let aniFilter = data.map((num, idx) => <ListGroup.Item key={idx}>{num}</ListGroup.Item>)

    return (
      <>
        <header>
          <h1>The Animal Kingdom</h1>
        </header>
        <main />
        <form onSubmit={this.handleSubmit}>
          <label>
            <input></input>
          </label>
          <label>
            <select name="filter" onChange={this.howSort}>
              <option value="1">1 horn</option>
              <option value="2">2 horn</option>
              <option value="3">3 horn</option>
            </select>
          </label>
          <button type="submit">Filter</button>
        </form>
        <ListGroup>
          {/* {aniFilter} */}
        </ListGroup>
        <Main
          data={this.state.filteredData}
          addhearts={this.addHearts}
          handleOpenModal={this.handleOpenModal}
        />
        <main />
        <footer>&copy; by Joel Myrtil</footer>
        <Modal
          show={this.state.showModal}
          onHide={this.handleCloseModal}
        >
          <Modal.Body>
            <img
              src={this.state.ani.imageURL}
              width={465} height={500}
              alt={this.state.ani.name} />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default App;
