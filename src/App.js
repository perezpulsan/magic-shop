import React, {Component} from "react";

import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.state({sideDrawerOpen: false});
  };
  render() {
    return (
      <div style={{height: "100%"}}>
        <Navbar />

        <main style={{marginTop: "70px"}}>
          <p>This is the content of the page</p>
        </main>
      </div>
    );
  }
}

export default App;
