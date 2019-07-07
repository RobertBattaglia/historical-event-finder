import React, { Component } from 'react';
import Event from './Event.jsx';
import axios from 'axios';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
    this.getAllEvents = this.getAllEvents.bind(this);
  }

  getAllEvents() {
    axios.get('/events').then(({ data }) => {
      this.setState({ events: data.slice(0, 10) });
    });
  }

  componentDidMount() {
    this.getAllEvents();
  }

  render() {
    return (
      <div>
        {this.state.events.map(({ date, description }) => {
          return (
            <Event
              key={description.slice(0, 29)}
              date={date}
              description={description}
            />
          );
        })}
      </div>
    );
  }
}

export default Events;
