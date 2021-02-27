// Basics of Form Handling - Tutorial 21
// Input, Textarea & Select form components
import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: '',
      topic: 'react'
    };
  }

  // Updates State when user fills out form input - controlled component example
  handlerUsernameChange = event => {
    this.setState({
        username: event.target.value
    })
  }

  handleCommentsChange = event => {
    this.setState({
        comments: event.target.value
    })
  }

  handleHandleTopicChange = event => {
    this.setState({
        topic: event.target.value
    })
  }

  handleSubmit = event => {
      alert(`${this.state.username} ${this.state.topic}`)
      // Prevents Page from reloading on form submit
      event.preventDefault()
  }

  render() {
      const {username, comments, topic} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handlerUsernameChange}
          />
        </div>
        <div>
            <label>Comments</label>
            <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={topic} onChange={this.handleHandleTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
