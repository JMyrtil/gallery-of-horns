import React from 'react';
// import Button from 'react-bootstrap/Button';
import './Animal.css';

class Animals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waves: 0
    };
  }

  handleWaves = () => {
    this.setState({
      waves: this.state.waves + 1,
    });
  }

  handleBlowUpClick = () => {
    this.props.handleOpenModal(this.props.ani)
  }

  render() {
    return (
      <article className="animals">
        <h2>{this.props.name}</h2>
        <p>😱 {this.state.waves} Favorites</p>
        <p onClick={this.handleWaves}>Ohh I Like This!!</p>
        <img
          src={this.props.imageURL}
          alt={this.props.name}
          onClick={this.handleBlowUpClick}
        />
      </article>
    );
  }
};

export default Animals;
