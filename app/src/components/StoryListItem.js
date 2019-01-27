import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

class StoryListItem extends Component {
  state = {

  }
  render() {
    const { story } = this.props
    return (
      <li className="story-item">
        <span className="item-number">{story.key}. </span>
        <div className="story-item-inner">
          <a href={story.url} rel="noopener noreferrer" target="_blank">{ story.title }</a>
          <p>
            <span>posted <Moment fromNow>{story.date_submitted}</Moment></span>
            &nbsp;|&nbsp;
            <span>{story.points} points</span>
            &nbsp;|&nbsp;
            <Link to={`/stories/${story._id}`}>{story.comments.length} comment{story.comments.length !== 1 && "s"}</Link>
          </p>
        </div>
      </li>
    )
  }
}

export default StoryListItem
