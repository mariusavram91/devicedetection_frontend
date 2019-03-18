import React, { Component } from 'react';
import Info from './Info.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {info: [], error: null};
    this.detectDevice = this.detectDevice.bind(this);
  }

  detectDevice() {
    const endpoint = process.env.REACT_APP_API_URL + '/device_info';
    fetch(endpoint)
      .then(results=>results.json())
      .then(info=>this.setState({info}))
      .catch(error=>this.setState({error}));
  }

  render() {
    let info = <Info info={this.state.info}/>;
    if (this.state.error) {
      info = <p className="error">Error: {this.state.error.message}</p>
    }

    return (
      <div className="App">
        <div className="header">Device Detector</div>

        <div className="action">
            <p>Click to check what type of device and what OS you are using.</p>
            <button className="btn" type="button" onClick={this.detectDevice}>
                <span>Detect Device</span>
            </button>
        </div>

        {info}
      </div>
    );
  }
}

export default App;
