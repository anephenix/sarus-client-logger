// NPM Dependencies
import React, { Component } from 'react';

// File Dependencies
import '../styles/WebSocketForm.scss';

class WebSocketForm extends Component {
  constructor(props) {
    super(props);
    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.state = {
      url: '',
      reconnectAutomatically: true,
      retryConnectionDelay: true,
      storageType: 'local'
    };
  }

  connect(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
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
    let disabledState = { disabled: 'disabled' };
    let isReady = undefined;
    if (sarus && sarus.ws && sarus.ws.readyState === 1) {
      className = 'disconnect';
      buttonText = 'Disconnect';
      action = this.disconnect();
    }

    if (this.state.url.match(/^(wss|ws):/)) {
      disabledState = { disabled: null };
      isReady = 'ready';
    }
    return (
      <div id="websocket-form">
        <form onSubmit={action}>
          <div id="main-form">
            <input
              type="text"
              placeholder="type in the WebSocket url here"
              name="websocket-server"
              onChange={e => this.setState({ url: e.target.value })}
              value={this.state.url}
              className={isReady}
            />
            <button {...disabledState} className={className} type="submit">
              {buttonText}
            </button>
          </div>
          <div id="advanced-form">
            <label>
              Reconnect automatically
              <input
                type="checkbox"
                name="reconnectAutomatically"
                checked={this.state.reconnectAutomatically}
                onChange={e =>
                  this.setState({
                    reconnectAutomatically: e.target.value
                  })
                }
              />
            </label>
            <label>
              Retry connection delay
              <input
                type="checkbox"
                name="retryConnectionDelay"
                checked={this.state.retryConnectionDelay}
                onChange={e =>
                  this.setState({
                    retryConnectionDelay: e.target.value
                  })
                }
              />
            </label>
            <label>Message persistence type</label>
            <select
              name="storageType"
              onChange={e => this.setState({ storageType: e.target.value })}
            >
              <option value="memory">In-memory</option>
              <option value="session">Session storage</option>
              <option value="local">Local storage</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default WebSocketForm;
