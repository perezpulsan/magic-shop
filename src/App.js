import React, {Component} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar/Navbar";
import { Jumbotron, Button  } from 'reactstrap';



class App extends Component {
 
  render() {
    return (
      <div style={{height: "100%"}}>
        <Navbar />
        <Jumbotron/>
        <Button/>

        <main style={{marginTop: "70px"}}>
          <p>This is the content of the page</p>
        </main>
      </div>
    );
  }
}

export default App;
