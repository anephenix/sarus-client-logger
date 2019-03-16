// NPM Dependencies
import React, { Component } from 'react';
import SocketStatus from './SocketStatus';

class WebSocketForm extends Component {
  constructor(props) {
    super(props);
    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
  }

  connect(event) {
    event.preventDefault();
    this.props.onSubmit(event);
  }

  disconnect() {
    const self = this;
    return event => {
      event.preventDefault();
      self.props.sarus.disconnect();
    };
  }

  render() {
    const { sarus } = this.props;
    let buttonText = 'Connect';
    let action = this.connect;
    let className = 'connect';
    if (sarus && sarus.ws && sarus.ws.readyState === 1) {
      className = 'disconnect';
      buttonText = 'Disconnect';
      action = this.disconnect();
    }

    return (
      <div id="websocket-form">
        <SocketStatus sarus={sarus} />

        <form onSubmit={action}>
          <div id="main-form">
            <input
              type="text"
              placeholder="type in the WebSocket url here"
              name="websocket-server"
            />
            <button className={className} type="submit">
              {buttonText}
            </button>
          </div>
          <div id="advanced-form">
            <label>
              Reconnect automatically
              <input type="checkbox" name="reconnectAutomatically" checked />
            </label>
            <label>
              Retry connection delay
              <input type="checkbox" name="retryConnectionDelay" checked />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default WebSocketForm;
