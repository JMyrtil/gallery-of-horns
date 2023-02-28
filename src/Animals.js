import React from 'react';
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

  render() {
    return (
      <article>
        <h2>{this.props.name}</h2>
        <p>{this.state.waves} interests</p>
        <p onClick={this.handleWaves}>Check These Out</p>
        <img
          src={this.props.imageURL}
          alt={this.props.name}
        />
      </article>
    );
  }
};

export default Animals;
