import React from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";

export default class extends React.Component{
  render(){
    return (
      <div>
        <Player
          ref="player"
          fluid={false}
          width={400}
          height={300}
          autoPlay
        >
          <source src="rtmp://live.hkstv.hk.lxdns.com/live/hks" type="rtmp/flv"/>
        </Player>
      </div>
    );
  }
}
