import React from 'react';
import Event from './Event.jsx';

const Events = ({ events, editEvent }) => {
  return (
    <div className="events">
      {events.map(({ date, description }, index) => {
        return (
          <Event
            key={index}
            date={date}
            description={description}
            editEvent={editEvent}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Events;
