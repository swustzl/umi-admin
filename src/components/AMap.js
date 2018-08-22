import Map from 'react-amap/lib/map';
import React from 'react';
import { amapKey } from '../utils/config';

export default class AMap extends React.Component {
  render () {
    return (
      <Map amapkey={amapKey}>
        {this.props.children}
      </Map>
    )
  }
}
