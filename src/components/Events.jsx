import React, { Component } from 'react';
import Event from './Event.jsx';

const Events = ({ events }) => {
  return (
    <div>
      {events.map(({ date, description }, index) => {
        return <Event key={index} date={date} description={description} />;
      })}
    </div>
  );
};

export default Events;
