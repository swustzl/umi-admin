import React from "react"
//import QRCode from 'qrcode.react'
const QRCode = require('qrcode.react');

export default class Qrcode extends React.Component{
  constructor(props){
    super(props)
    this.state={
      url:"http://www.baidu.com"
    }
  }

  componentDidMount(){
  }

  render(){
    return(
      <div>
        <QRCode size={150} value={this.state.url} />
      </div>
    )
  }
}
