import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {info: []};
    this.detectDevice = this.detectDevice.bind(this);
  }

  detectDevice() {
    fetch('http://localhost:8000/api/device_info')
      .then(results=>results.json())
      .then(info=>this.setState({info}));
  }

  render() {
    return (
      <div className="App">
        <p>Click to check what type of device and what OS you are using.</p>
        <button onClick={this.detectDevice}>
            Detect Device
        </button>

        <div className="info">
            <table>
              <tbody>
                <tr>
                  <th>Type of device</th>
                  <th>Device OS</th>
                </tr>
                <tr>
                    <td>{ this.state.info.type }</td>
                    <td>{ this.state.info.os }</td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default App;
