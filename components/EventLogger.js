// NPM Dependencies
import React, { Component } from 'react';

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

export default EventLogger;
