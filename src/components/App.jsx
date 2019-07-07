import React, { Component } from 'react';
import Events from './Events.jsx';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Historical Events</h1>
        <Events />
      </React.Fragment>
    );
  }
}
