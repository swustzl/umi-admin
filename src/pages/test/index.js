import React from 'react'
import { withRouter, Prompt } from 'dva/router'
import { Button } from 'antd'
import DndColumnField from '../../components/DndColumnField'

@withRouter
export default class extends React.Component {
  state = {
    data: [
      { id: 0, key: 'k1', title: 'title1' },
      { id: 1, key: 'k2', title: 'title2' },
      { id: 2, key: 'k3', title: 'title3' },
      { id: 3, key: 'k4', title: 'title4' },
      { id: 4, key: 'k5', title: 'title5' },
    ]
  }
  render () {
    return (
      <div style={{ width: '200px', height: '200px' }}>
        <Button onClick={() => { this.dotListFieldDndRef.show() }}>TTTTTT</Button>
        <DndColumnField
          data={this.state.data}
          onRef={(ref) => { this.dotListFieldDndRef = ref; }}
        />
      </div>
    )
  }
}
