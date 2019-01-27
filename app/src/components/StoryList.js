import React from 'react'
import StoryListItem from './StoryListItem'

const renderStories = (stories) => {
  return stories.map(story => <StoryListItem story={story} key={story.key}/>)
}
const renderPagination = (storyCount, page, goTo) => {
  return (
    <ul>
      {
        Array.from(Array(Math.ceil(storyCount / 10)), (e,idx)=> {
          return <li 
                  className={idx === page ? "active" : ""} 
                  key={`page${idx + 1}`}  
                  onClick={() => goTo(idx)}
                >  
                  {idx + 1}
                </li>
        })
      }
    </ul> 
  )
}

const StoryList = ({ stories, storyCount, page, next, prev, goTo }) => {
  return (
    <>
      <h2>All Stories</h2>
      {
        storyCount > 10 // only display pagination if there are more than 10 stories
          &&
            <div className="pagination">
              <button onClick={prev}>{"<"}</button>
                {renderPagination(storyCount, page, goTo)}
              <button onClick={next}>{">"}</button>
            </div>
      }
      <section className="story-list">
        {
          stories.length > 0 ? 
            <ol>
              {renderStories(stories)}
            </ol>
            :
            <p>Sorry, there have been no stories submitted yet.</p>
        }
      </section>
    </>
  )
}

export default StoryList


