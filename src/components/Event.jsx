import React, { Component } from 'react';

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      description: this.props.description,
      date: this.props.date
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClick(e) {
    this.setState({ edit: !this.state.edit });
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
    this.props.editEvent(
      { date: this.state.date, description: this.state.description },
      this.props.index
    );
    this.setState({ edit: false });
  }

  render() {
    return (
      <div className="event">
        {!this.state.edit ? (
          <React.Fragment>
            <h3>{this.props.date}</h3>
            <p>{this.props.description}</p>
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
            <button onClick={this.handleClick}>Cancel</button>
          </React.Fragment>
        )}
      </div>
    );
  }
}
