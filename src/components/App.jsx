import React, { Component } from 'react';
import axios from 'axios';
import Events from './Events.jsx';
import Search from './Search.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
    this.getEvents = this.getEvents.bind(this);
  }

  getEvents(query) {
    axios
      .get(`/events?q=${query}`)
      .then(({ data }) => {
        this.setState({ events: data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Historical Events</h1>
        <Search handleSearch={this.getEvents} />
        <Events events={this.state.events} />
      </React.Fragment>
    );
  }
}

export default App;
