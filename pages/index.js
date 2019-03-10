// NPM Dependencies
import React, { Component } from 'react';
import Sarus from '@anephenix/sarus';

// File Dependencies
import '../styles/homepage.scss';
import '../styles/theme.scss';
import '../styles/SocketStatus.scss';
import '../styles/WebSocketForm.scss';
import '../styles/EventLogger.scss';

class WebSocketForm extends Component {
  constructor(props) {
    super(props);
    this.connect = this.connect.bind(this);
  }

  connect(event) {
    event.preventDefault();
    this.props.onSubmit(event);
  }

  render() {
    return (
      <div id="websocket-form">
        <form onSubmit={this.connect}>
          <label htmlFor="websocket-server">WebSocket server url</label>
          <input
            type="text"
            placeholder="e.g. ws://echo.websocket.org"
            name="websocket-server"
          />
          <button type="submit">Connect</button>
        </form>
      </div>
    );
  }
}

const EventItem = ({ date, type, info, close }) => {
  const className = `event ${type}`;
  return (
    <div className={className}>
      <div className="status">{type}</div>
      <div className="date">
        {
          date
            .toISOString()
            .split('T')[1]
            .split('Z')[0]
        }
      </div>
      <div className="info">{info}</div>
      <div className="close-button" onClick={close}>
        ×
      </div>
    </div>
  );
};

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
    return (
      <div id="socket-status" className={status}>
        WebSocket Status: {status}
      </div>
    );
  }
}

class EventLogger extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sarus, eventLog } = this.props;
    if (sarus) {
      return <div id="event-logger">{eventLog.map(EventItem)}</div>;
    } else {
      return null;
    }
  }
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
      sarus: null,
      eventLog: []
    };
    this.createConnection = this.createConnection.bind(this);
  }

  createConnection(event) {
    const self = this;
    const { eventLog } = self.state;
    const url = event.target.getElementsByTagName('input')[0].value;
    const close = date => {
      return () => {
        const evntLog = self.state.eventLog;
        const evnt = evntLog.find(
          e => e.date.toISOString() === date.toISOString()
        );
        evntLog.splice(evntLog.indexOf(evnt), 1);
        self.setState({ eventLog: evntLog });
      };
    };
    const sarus = new Sarus({
      url,
      retryConnectionDelay: true,
      eventListeners: {
        open: [
          () => {
            const date = new Date();
            eventLog.push({
              date,
              type: 'open',
              info: `Connection on ${url} is open`,
              close: close(date)
            });
            self.setState({ eventLog });
          }
        ],
        message: [
          event => {
            const date = new Date();
            eventLog.push({
              date,
              type: 'message',
              info: 'Received message from server',
              data: event.data,
              close: close(date)
            });
            self.setState({ eventLog });
          }
        ],
        close: [
          () => {
            const date = new Date();
            eventLog.push({
              date,
              type: 'close',
              info: `Connection to ${url} is closed`,
              close: close(date)
            });
            self.setState({ eventLog });
          }
        ],
        error: [
          error => {
            const date = new Date();
            eventLog.push({
              date,
              type: 'error',
              info: `An error occurred`,
              error,
              close: close(date)
            });
            self.setState({ eventLog });
          }
        ]
      }
    });
    this.setState({ sarus, url });
  }

  render() {
    const { sarus, eventLog } = this.state;
    return (
      <div id="homepage">
        <h1>Sarus client logger</h1>
        <p>Type in the url for your WebSocket server, and press Connect.</p>
        <WebSocketForm onSubmit={this.createConnection} />
        <SocketStatus sarus={sarus} />
        <EventLogger sarus={sarus} eventLog={eventLog} />
      </div>
    );
  }
}

export default HomePage;
