import React from 'react';
import styles from './PlatformDeployment.less';
import CustomTitle from "../../../components/CustomTitle/index";
import Iconfont from "../../../components/Iconfont/Iconfont";
import MapChart from "../../../components/ReactChart/MapChart";
import { geoCoordMap } from '../util';
import SummaryTable from "./components/SummaryTable";

export default class extends React.Component{
  render(){
    return(
      <div className={styles.main}>
        <CustomTitle title="共享交换体系"/>
        <div style={{ width: '100%', marginTop: '30px', textAlign: 'center'}}>
          <img src={'/assets/交换系统三级体系图.png'}/>
        </div>
      </div>
    )
  }
}
