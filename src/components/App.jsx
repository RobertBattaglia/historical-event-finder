import React, { Component } from 'react';
import axios from 'axios';
import Events from './Events.jsx';
import Search from './Search.jsx';
import Paginate from './Paginate.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [], pageCount: null, page: null };
    this.getEvents = this.getEvents.bind(this);
  }

  getEvents(query) {
    axios
      .get(`/events?q=${query}`)
      .then(({ data }) => {
        this.setState({ pageCount: Math.ceil(data.length / 10) });
        this.setState({ page: 1 });
        this.setState({ events: data.slice(0, 10) });
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
        {this.state.pageCount ? (
          <Paginate pageCount={this.state.pageCount} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
