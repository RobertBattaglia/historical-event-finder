import React from 'react';
import Event from './Event.jsx';

const Events = ({ events }) => {
  return (
    <div className="events">
      {events.map(({ date, description }, index) => {
        return <Event key={index} date={date} description={description} />;
      })}
    </div>
  );
};

export default Events;
