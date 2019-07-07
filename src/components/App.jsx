import React, { Component } from 'react';
import axios from 'axios';
import Events from './Events.jsx';
import Search from './Search.jsx';
import Paginate from './Paginate.jsx';
import Styles from '../styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [], query: null, pageCount: null };
    this.getEvents = this.getEvents.bind(this);
    this.getPageEvents = this.getPageEvents.bind(this);
  }

  getEvents(query) {
    axios
      .get(`/events?q=${query}`)
      .then(({ data }) => {
        this.setState({ query });
        this.setState({ pageCount: null }),
          this.setState({ pageCount: Math.ceil(data.length / 5) });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getPageEvents(page) {
    axios
      .get(`/events?q=${this.state.query}&_page=${page}&_limit=5`)
      .then(({ data }) => {
        this.setState({ events: data });
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Historical Events</h1>
        <Search handleSearch={this.getEvents} />
        {this.state.pageCount ? (
          <Paginate
            handlePage={this.getPageEvents}
            pageCount={this.state.pageCount}
          />
        ) : null}
        <Events events={this.state.events} />
      </React.Fragment>
    );
  }
}

export default App;
