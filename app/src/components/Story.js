import React, { Component } from 'react'
import AddComment from './AddComment'
import API from '../api/API'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

class Story extends Component {
  state = {
    story: null,
    // comments: []
  }
  renderComments = () => {
    return this.state.story.comments.map((comment, idx) => {
      return (
        <li key={idx}>
          <span></span>
          <p>{comment.body}</p>
        </li>
      )
    })
  }
  addComment = (comment) => {
    let commentObj = {
      body: comment,
      submitter: this.props.user
    }
    API.addComment(this.state.story._id, commentObj)
      .then(data => this.setState({
        story: data
      }), this.props.updateApp())
  }
  upVote = () => {
    this.setState({
      story: {
        ...this.state.story,
        points: this.state.story.points+1
      }
    }, () => {
      API.updateStory(this.state.story)
        .then(() => this.props.updateApp())
    })
  }
  componentDidMount() {
    if (this.props.story === undefined ) {
      API.getStory(this.props.match.params.id)
        .then(data => {
          this.setState({
            story: data,
            // comments: [...data.comments, this.state.comments]
          })
        })
    } else {
      this.setState({
        story: this.props.story,
        // comments: [...this.props.story.comments, this.state.comments]
      })
    }
  }
  render() {
    const { story } = this.state
    
    return (
      <section className="story-details">
        <Link to="/">{"< All Stories"}</Link>
        {
          story && story.title ? 
            <>
              <h2>{story.title}</h2>
              <a href={story.url} rel="noopener noreferrer" target="_blank">View Story</a>
              <p>
                <span>posted <Moment fromNow>{story.date_submitted}</Moment></span>
                &nbsp;|&nbsp;
                <span>{story.points} points</span>
                &nbsp;|&nbsp;
                <Link to={`/stories/${story._id}`}>{story.comments.length} comment{story.comments.length !== 1 && "s"}</Link>
                <button className="upvote" onClick={this.upVote}>Upvote</button>
              </p>
              <AddComment addComment={this.addComment} />
              {
                story.comments 
                &&
                <div className="comments">
                  <h3>Comments</h3>
                  <ul className="comments-list">
                    {this.renderComments()}
                  </ul>
                </div>
              }
            </>
          :
          <p>Sorry, that story does not exist.</p>
        }
      </section>
    )
  }
}

export default Story
