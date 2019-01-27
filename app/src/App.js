import React, { Component } from 'react';
import './App.css';
import API from './api/API'

import StoryList from './components/StoryList'
import Story from './components/Story';

import { Route, Switch } from 'react-router-dom'

class App extends Component {
  state = {
    allStories: [],
    page: 0,
    currentUser: "Peter Parker"
  }
  componentDidMount(){
    this.getAllStories()
  }
  getAllStories = () => {
    API.getStories()
      .then(stories => {
        stories.map((story, idx) =>{
          return story.key = idx+1
        }) // add key for indexing on multiple pages
        this.setState({
          allStories: stories
        })
      })
  }
  addStory = (story) => {
    API.createStory(story)
      .then(resp => console.log(resp))
  }
  getStory = (id) => {
    return this.state.allStories.find(story => story._id === id) // get story from app state
  }
  nextPage = () => {
    this.state.allStories.length > this.state.page * 10 + 10 // only get next page if there are more stories to see
      && 
        this.setState({page: this.state.page + 1})
  }
  prevPage = () => {
    this.state.page > 0 // never go beyond "page 0"
      &&
        this.setState({page: this.state.page - 1})
  }
  goToPage = (number) => {
    this.setState({page: number}) // for clicking on page numbers
  }
  render() {
    const pageStart = this.state.page * 10 
    const stories = this.state.allStories.slice(pageStart, pageStart + 10)
    return (
      <div className="App">
        <header>
          <h1>Slacker News</h1>
        </header>
        <Switch>
          <Route exact path="/" component={props => 
            <StoryList 
              {...props} 
              stories={stories} 
              storyCount={this.state.allStories.length}
              page={this.state.page} 
              prev={this.prevPage} 
              next={this.nextPage} 
              goTo={this.goToPage}
            />} 
          />
          <Route exact path="/stories/:id" component={props => 
            <Story 
              {...props} 
              story={this.getStory(props.match.params.id)} 
              user={this.state.currentUser}
              updateApp={this.getAllStories}
            />} 
          />
          <Route component={props => <p>Page not found!</p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
