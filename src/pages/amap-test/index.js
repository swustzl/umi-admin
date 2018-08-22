import React from 'react';
import {InfoWindow, Markers} from 'react-amap';
import AMap from "../../components/AMap";
import styles from './index.less';
import Iconfont from "../../components/Iconfont/Iconfont"

const ZoomCtrl = (props) => {
  const map = props.__map__;
  if (!map) {
    console.log('组件必须作为 Map 的子组件使用');
    return;
  }
  const zoomIn = () => map.zoomIn();
  const zoomOut = () => map.zoomOut();

  return (<div id="zoom-ctrl">
    <span onClick={zoomIn}>+</span>
    <span onClick={zoomOut}>-</span>
  </div>);
};
const randomMarker = (len) => (
  Array(len).fill(true).map((e, idx) => ({
    id: `${idx}+${Math.random()}`,
    position: {
      longitude: 100 + Math.random() * 30,
      latitude: 30 + Math.random() * 20,
    },
  }))
);
export default class extends React.Component {
  constructor (props){
    super(props)
    this.markers = randomMarker(1000);
    this.center = {longitude: 115, latitude: 40};
    this.state = {
      useCluster: true,
      windowVisible: false,
      currClickMarker: {},
    }
  }
  toggleCluster(){
    this.setState({
      useCluster: !this.state.useCluster,
    });
  }
  markerClick = (e, marker) => {
    // 通过高德原生提供的 getExtData 方法获取原始数据
    const extData = marker.getExtData();
    console.log(e,extData);
    this.setState({
      currClickMarker: extData,
      windowVisible: true,
    })
  }
  render () {
    this.markersEvents = {
      click: this.markerClick
    }
    return (
      <div className={styles.main}>
        <AMap>
          <ZoomCtrl />
          <InfoWindow
            position={this.state.currClickMarker.position}
            visible={this.state.windowVisible}
            isCustom
          >
            <p>This is a window</p>
            <p>Changing Value: {this.state.currClickMarker.id}</p>
            <button onClick={() => { this.setState({ windowVisible: false })}}>Close Window</button>
          </InfoWindow>
          <Markers
            markers={this.markers}
            useCluster={this.state.useCluster}
            events={this.markersEvents}
            render={(extData)=>{
             return(<div>
               <Iconfont type={'luxiangji'} style={{ fontSize: '30px', color: '#2db1ff'}}/>
             </div>)
            }}
          />
        </AMap>
      </div>
    )
  }
}
