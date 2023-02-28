import React from "react";
import Main from './Main';
import data from './data.json';
import './App.css';
class App extends React.Component {

  render() {
    return (
      <>
        <header>
          <h1>The Animal Kingdom</h1>
        </header>
          <Main data={data}/>
        <footer>&copy; by Joel Myrtil</footer>
      </>
    );
  }
}

export default App;
