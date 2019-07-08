import React, { Component } from 'react';
import axios from 'axios';

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      description: this.props.description,
      date: this.props.date,
      id: this.props.id
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClick() {
    this.setState({ edit: !this.state.edit });
  }
  handleCancelClick() {
    this.setState({
      edit: !this.state.edit,
      date: this.props.date,
      description: this.props.description
    });
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .patch(`/events/${this.state.id}`, {
        date: this.state.date,
        description: this.state.description
      })
      .then(() => {
        this.props.editEvent(this.state.id, this.props.index);
        this.setState({ edit: false });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="event">
        {!this.state.edit ? (
          <React.Fragment>
            <h3>{this.state.date}</h3>
            <p>{this.state.description}</p>
            <button onClick={this.handleClick}>Edit</button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <form onSubmit={this.handleSubmit}>
              <input
                className="input"
                name="date"
                onChange={this.handleInputChange}
                value={this.state.date}
              />
              <textarea
                cols="50"
                rows="10"
                className="input"
                name="description"
                onChange={this.handleInputChange}
                value={this.state.description}
              />
              <button className="input" type="submit">
                submit
              </button>
            </form>
            <button onClick={this.handleCancelClick}>Cancel</button>
          </React.Fragment>
        )}
      </div>
    );
  }
}
