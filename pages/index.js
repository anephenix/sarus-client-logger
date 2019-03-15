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
        <SocketStatus sarus={this.props.sarus} />

        <form onSubmit={this.connect}>
          <div id="main-form">
            <input
              type="text"
              placeholder="type in the WebSocket url here"
              name="websocket-server"
            />
            <button type="submit">Connect</button>
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

const EventItem = ({ date, type, info, close }, index) => {
  const className = `event ${type}`;
  return (
    <div className={className} key={index}>
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

    const className = `symbol ${status}`;
    return (
      <div id="socket-status" className={status}>
        <div className={className} /> {status}
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

class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 1280, height: 800 };
  }

  componentDidMount() {
    // this.setState({ width: window.innerWidth, height: innerHeight });
    this.updateCanvas();
  }

  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    const colors = ['#000', '#111', '#222', '#333'];
    const factor = 5;
    const line = 5;

    for (let i = 0; i <= window.innerWidth; i += factor + line) {
      for (let y = 0; y <= window.innerWidth; y += factor + line) {
        const randomNumber = Math.floor(colors.length * Math.random());
        ctx.fillStyle = colors[randomNumber];
        ctx.fillRect(i, y, factor, factor);
      }
    }
    // ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    // draw children “components”
  }
  render() {
    const { width, height } = this.state;
    return <canvas ref="canvas" width={width} height={height} />;
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
    const reconnectAutomatically = event.target.getElementsByTagName('input')[1]
      .checked;
    const retryConnectionDelay = event.target.getElementsByTagName('input')[2]
      .checked;
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
      reconnectAutomatically,
      retryConnectionDelay,
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
    window.x = sarus;
    this.setState({ sarus, url });
  }

  render() {
    const { sarus, eventLog } = this.state;
    return (
      <div id="container">
        <CanvasComponent />
        <div id="homepage">
          <WebSocketForm onSubmit={this.createConnection} sarus={sarus} />
          <EventLogger sarus={sarus} eventLog={eventLog} />
        </div>
      </div>
    );
  }
}

export default HomePage;
