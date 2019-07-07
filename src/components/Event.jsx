import React, { Component } from 'react';

export default class Event extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.date}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
