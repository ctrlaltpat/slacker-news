import React, { Component } from 'react'

export default class AddComment extends Component {
  state = {
    message: ''
  }
  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.message.length > 0) {
      this.props.addComment(this.state.message)
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="comment-form">
        <textarea 
          name="comment" 
          rows="5" 
          onChange={this.handleChange}
          placeholder="Type your comment here..."
        >
        </textarea>
        <button type="submit">Add Comment</button>
      </form>
    )
  }
}
