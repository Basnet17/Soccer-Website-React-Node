import React, { Component } from 'react';
import './App.css';
import Welcome from './homepage';
import Game from './center';
// import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
state = {
  data: null
};

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
 };

 render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;
