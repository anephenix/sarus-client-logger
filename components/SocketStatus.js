// NPM Dependencies
import React, { Component } from 'react';

// File Dependencies
import '../styles/SocketStatus.scss';

class SocketStatus extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { sarus } = this.props;
    if (!sarus) return <div />;
    const { readyState } = sarus.ws;
    let status;
    switch (readyState) {
      case 0:
        status = 'Connecting';
        break;
      case 1:
        status = 'Connected';
        break;
      case 2:
        status = 'Error';
        break;
      default:
        status = 'Disconnected';
    }

    const className = `symbol ${status}`;
    return (
      <div id="socket-status" className={status}>
        <div className={className} />
        <span className="status">{status}</span>
      </div>
    );
  }
}

export default SocketStatus;
