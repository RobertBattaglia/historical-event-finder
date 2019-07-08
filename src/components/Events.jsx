import React from 'react';
import Event from './Event.jsx';

const Events = ({ events, editEvent }) => {
  return (
    <div className="events">
      {events.map(({ date, description, id }, index) => {
        return (
          <Event
            key={id}
            date={date}
            description={description}
            editEvent={editEvent}
            index={index}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default Events;
