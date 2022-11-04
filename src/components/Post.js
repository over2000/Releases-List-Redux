import React from 'react'

import Comment from './Comment'

export default class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: [],
      newCommentText: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleSubmit(e) {
    this.setState({
      comments: [...this.state.comments, { text: this.state.newCommentText }],
    })

    this.setState({ newCommentText: '' })

    e.preventDefault()
  }

  handleTextChange(e) {
    this.setState({ newCommentText: e.target.value })
  }

  render() {
    console.log('teste', this.state.comments)
    //console.log('ID', this.state.newCommentText)
    return (
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.newCommentText}
            onChange={this.handleTextChange}
          />
          <button type='submit'>comentar</button>
        </form>
        {this.state.comments.map((comment, index) => {
          console.log('teste2')
          return <Comment key={index} text={comment.text} />
        })}
      </div>
    )
  }
}
