import React from 'react'
import { withRouter, Prompt } from 'dva/router'
import Board from './components/Board'
import { observe } from './components/Game'

@withRouter
export default class extends React.Component {
  state = {
    pieces: []
  }
  componentDidMount () {
    observe(pieces => {
      this.setState({ pieces })
    })
  }
  render () {
    return (
      <div style={{ width: '200px', height: '200px' }}>
        <Board pieces={this.state.pieces}></Board>
        <Prompt when={false} message={location => (
          `Are you sue you want to go to ${location.pathname}?`
        )} />
      </div>
    )
  }
}
