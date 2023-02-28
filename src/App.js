import React from "react";
import './App.css';
import Moose from "./Moose";
import Rhino from "./Rhino";
import Xenokeryx from "./Xenokeryx";

class App extends React.Component {

  render() {
    return (
      <>
        <header>
          <h1>The Animal Kingdom</h1>
        </header>
        <main>
          <Moose name="Moose"/>
          <Rhino name="Rhino"/>
          <Xenokeryx name="Xeno"/>
        </main>
        <footer>&copy; by Joel Myrtil</footer>
      </>
    );
  }
}

export default App;
