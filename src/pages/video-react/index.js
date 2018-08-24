import React from 'react';
 //import { Player } from 'video-react';
 //import "video-react/dist/video-react.css";
//如果上面的rtmp流无法播放，就播放hls流
//<source src="http://10.10.5.119/live/livestream.m3u8" type='application/x-mpegURL'>

export default class extends React.Component{
  componentDidMount(){
    /*let player = window.videojs('my-video');
    player.play();*/
    //this.refs.player.play()
  }
  render(){
    return (
      <div>
        {/*<Player
          ref="player"
          fluid={false}
          width={400}
          height={300}
          autoPlay
        >
        <source src="rtmp://live.hkstv.hk.lxdns.com/live/hks" type="rtmp/flv"/>
      </Player>*/}
        <video id="my-video" className="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" width="640" height="300"
               poster="http://ppt.downhot.com/d/file/p/2014/08/12/9d92575b4962a981bd9af247ef142449.jpg" data-setup="{}">
          {/*<source src="rtmp://live.hkstv.hk.lxdns.com/live/hks" type="rtmp/mp4"/>*/}
          <source src="http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8" type='application/x-mpegURL'/>
          <p className="vjs-no-js">播放视频需要启用 JavaScript，推荐使用支持HTML5的浏览器访问。
            To view this video please enable JavaScript, and consider upgrading to a web browser that
            <a href="http://videojs.com/html5-video-support/">supports HTML5 video</a>
          </p>
        </video>
      </div>
    );
  }
}
