import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Info.css';

class Info extends Component {
  render() {
    const { info } = this.props;

    return(
      <div className="Info">
        <table>
          <tbody>
            <tr>
              <th>Type of device</th>
              <th>Device OS</th>
            </tr>
            <tr>
              <td>{info.type}</td>
              <td>{info.os}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

Info.propTypes = {
  info: PropTypes.shape({
    type:PropTypes.string,
    os:PropTypes.string,
  }).isRequired,
};

export default Info;
