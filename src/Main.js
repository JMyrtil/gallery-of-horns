import React from 'react';
import Animals from './Animals';
import './Main.css'

class Main extends React.Component {

  render() {
    let animals = [];
    this.props.data.forEach((ani, idx) => {
      animals.push(
        <Animals
          name={ani.name}
          imageURL={ani.imageURL}
          key={idx}
        />
      )
    });
    return (
      <main>
        {animals}
      </main>
    );
  }
}

export default Main;
