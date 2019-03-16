// NPM Dependencies
import React, { Component } from 'react';
import Sarus from '@anephenix/sarus';

// File Dependencies
import '../styles/homepage.scss';
import '../styles/theme.scss';
import '../styles/SocketStatus.scss';
import '../styles/WebSocketForm.scss';
import '../styles/EventLogger.scss';
import EventLogger from '../components/EventLogger';
import WebSocketForm from '../components/WebSocketForm';

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
        <div id="homepage">
          <WebSocketForm onSubmit={this.createConnection} sarus={sarus} />
          <EventLogger sarus={sarus} eventLog={eventLog} />
        </div>
      </div>
    );
  }
}

export default HomePage;
