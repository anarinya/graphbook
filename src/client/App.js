import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import '../../assets/css/style.css'

import Feed from './components/Feed'

const posts = [{
  id: 2,
  text: 'Lorem Ipsum',
  user: {
    avatar: '/uploads/avatar1.png',
    username: 'Test User'
  }
}, {
  id: 1,
  text: 'Hello',
  user: {
    avatar: '/uploads/avatar2.png',
    username: 'Test User 2'
  }
}]

export default class App extends Component {
  state = {
    posts,
    postContent: ''
  }

  handlePostContentChange = event => {
    this.setState({postContent: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    const newPost = {
      id: this.state.posts.length + 1,
      text: this.state.postContent,
      user: {
        avatar: '/uploads/avatar1.png',
        username: 'Fake User'
      }
    }

    this.setState((prevState) => ({
      posts: [newPost, ...prevState.posts],
      postContent: ''
    }))
  }

  render() {
    const { posts, postContent } = this.state;
    return (
      <div className="container">
        <Helmet>
          <title>Graphbook - Feed</title>
          <meta name="description" content="Newsfeed of all your friends on Graphbook" />
        </Helmet>
        <Feed />
      </div>
    )
  }
}