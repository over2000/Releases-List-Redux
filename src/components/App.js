import React from 'react'
import Post from './Post'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Teste</h1>
        <Post title='teste1' />
        <Post title='teste2' />
        <Post title='teste3' />
      </div>
    )
  }
}
