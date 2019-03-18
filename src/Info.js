import React, { Component } from 'react';

class Info extends Component {
  render() {
      return(
        <div className="info">
            <table>
              <tbody>
                <tr>
                  <th>Type of device</th>
                  <th>Device OS</th>
                </tr>
                <tr>
                    <td>{ this.props.info.type }</td>
                    <td>{ this.props.info.os }</td>
                </tr>
              </tbody>
            </table>
        </div>
      )
  }
}

export default Info;
