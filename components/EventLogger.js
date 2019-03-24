// NPM Dependencies
import React, { Component } from 'react';

// File Dependencies
import '../styles/EventLogger.scss';

const EventItem = ({ date, type, data, info, close }, index) => {
  const className = `event ${type}`;
  let extra;
  if (type === 'message') {
    extra = <div className="data">{data}</div>;
  }
  return (
    <div className={className} key={index}>
      <div className="main-part">
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
      {extra}
    </div>
  );
};

class EventLogger extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sarus, eventLog } = this.props;
    if (sarus) {
      return (
        <div id="event-logger-component">
          <h2>
            Event Log ({eventLog.length}{' '}
            {eventLog.length !== 1 ? 'events' : 'event'})
          </h2>
          <div id="event-logger">{eventLog.map(EventItem)}</div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default EventLogger;
