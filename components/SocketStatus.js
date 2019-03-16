// NPM Dependencies
import React, { Component } from 'react';

class SocketStatus extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { sarus } = this.props;
    if (!sarus) return null;
    const { readyState } = sarus.ws;
    let status;
    switch (readyState) {
      case 0:
        status = 'connecting';
        break;
      case 1:
        status = 'open';
        break;
      case 2:
        status = 'closing';
        break;
      default:
        status = 'closed';
    }

    const className = `symbol ${status}`;
    return (
      <div id="socket-status" className={status}>
        <div className={className} /> {status}
      </div>
    );
  }
}

export default SocketStatus;
