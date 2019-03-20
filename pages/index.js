// NPM Dependencies
import React, { Component } from 'react';
import Sarus from '@anephenix/sarus';

// File Dependencies
import '../styles/homepage.scss';
import '../styles/theme.scss';
import EventLogger from '../components/EventLogger';
import WebSocketForm from '../components/WebSocketForm';
import SendMessage from '../components/SendMessage';
import SocketStatus from '../components/SocketStatus';
import MessageQueue from '../components/MessageQueue';
import ConnectionGraph from '../components/ConnectionGraph';

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

  createConnection(options) {
    const self = this;
    const { eventLog } = self.state;
    const { url, reconnectAutomatically, retryConnnectionDelay } = options;
    let { sarus } = this.state;
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

    if (sarus) {
      sarus.url = url;
      sarus.reconnectAutomatically = reconnectAutomatically;
      sarus.retryConnnectionDelay = retryConnnectionDelay;
      this.setState({ sarus, url });
      window.x = this.state.sarus;
      this.state.sarus.reconnect();
    } else {
      sarus = new Sarus({
        ...options,
        eventListeners: {
          open: [
            () => {
              const date = new Date();
              eventLog.push({
                date,
                type: 'open',
                info: `Connection on ${self.state.sarus.url} is open`,
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
                info: `Connection to ${self.state.sarus.url} is closed`,
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
  }

  render() {
    const { sarus, eventLog } = this.state;
    return (
      <div id="container">
        <div id="navbar">
          <SocketStatus sarus={sarus} />
          <WebSocketForm onSubmit={this.createConnection} sarus={sarus} />
        </div>
        <div id="homepage">
          <div id="primary-section">
            <EventLogger sarus={sarus} eventLog={eventLog} />{' '}
          </div>
          <div id="secondary-section">
            <ConnectionGraph sarus={sarus} />
            <MessageQueue sarus={sarus} />
            <SendMessage sarus={sarus} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
