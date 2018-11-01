import React, { Component } from 'react';
import { Popover } from 'antd'
import Ellipsis from '../components/antd/Ellipsis/index';
const defaultStyle = { whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
}

export default class PopoverSpan extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { data, popData, mainStyle, className } = this.props
    return (
      <span style={mainStyle} className={className}>
         {
           this.props.lines ?

             <Ellipsis tooltip lines={this.props.lines} style={{width:"100%"}}>
               <Popover overlayStyle={{maxWidth:"400px"}} placement="top" content={popData ? popData : data}>
                 {data}
               </Popover>
             </Ellipsis> :

             <Popover content={popData ? popData : data} overlayStyle={{maxWidth:"400px"}}>
              <span style={
                Object.assign({},defaultStyle,this.props.style)
              }>
                {data} </span>
             </Popover>
         }
      </span>
    )
  }
}
