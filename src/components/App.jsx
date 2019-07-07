import React, { Component } from 'react';
import axios from 'axios';
import Events from './Events.jsx';
import Search from './Search.jsx';
import Paginate from './Paginate.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [], query: null, pageCount: null, page: null };
    this.getEvents = this.getEvents.bind(this);
    this.getPageEvents = this.getPageEvents.bind(this);
  }

  getEvents(query) {
    axios
      .get(`/events?q=${query}`)
      .then(({ data }) => {
        this.setState({ query });
        this.setState({ pageCount: Math.ceil(data.length / 5) });
        this.setState({ page: 1 });
        this.setState({ events: data.slice(0, 5) });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getPageEvents(page) {
    axios
      .get(`/events?q=${this.state.query}&_page=${page}&_limit=5`)
      .then(({ data }) => {
        this.setState({ page });
        this.setState({ events: data });
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Historical Events</h1>
        <Search handleSearch={this.getEvents} />
        <Events events={this.state.events} />
        {this.state.pageCount ? (
          <Paginate
            handlePage={this.getPageEvents}
            pageCount={this.state.pageCount}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
