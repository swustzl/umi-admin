import React from 'react';
import styles from './index.less';
import CustomTitle from "../../../components/CustomTitle/index";

export default class extends React.Component{
  render(){
    return(
      <div className={styles.main}>
        <CustomTitle title="资料中心"/>
        <h1 style={{
          color: '#525353',
          fontSize: '28px',
          fontWeight: 'bold',
          lineHeight: 1.5,
          textAlign: 'center',
          padding: '30px 0 10px'}}>
          全国政协副主席辜胜阻来桂开展脱贫攻坚民主监督调研
        </h1>
        <div style={{
          borderBottom: '1px solid #dfdede',
          color: '#797a7a',
          padding: '20px 20px 10px',
          marginBottom: '40px',
          fontSize: '14px'
        }}>
          2018-08-31 19:28　 来源：广西日报-广西云客户端
        </div>
        <div style={{width: '100%', padding: '0 20px'}}>
          <p style={{textIndent: '2em'}}>8月30日至31日，全国政协副主席、民建中央常务副主席辜胜阻率民建中央调研组到桂开展脱贫攻坚民主监督调研。自治区党委书记鹿心社，自治区党委副书记、自治区主席陈武，自治区政协主席蓝天立在南宁拜会了辜胜阻一行。</p>
          <p style={{textIndent: '2em'}}>8月30日至31日，全国政协副主席、民建中央常务副主席辜胜阻率民建中央调研组到桂开展脱贫攻坚民主监督调研。自治区党委书记鹿心社，自治区党委副书记、自治区主席陈武，自治区政协主席蓝天立在南宁拜会了辜胜阻一行。</p>
          <p style={{textAlign: 'center', textIndent: '2em'}}><img alt="" height="507" src="http://d.gxzf.gov.cn/image/uploadpic/2018/08/31/f471807fcc3d8b8bdc967ef174cf8a26.jpg" title="" width="800"/></p>
          <p style={{textIndent: '2em'}}><span style={{color: 'rgb(0, 0, 255)'}}>8月30日，自治区党委书记鹿心社在南宁拜会全国政协副主席、民建中央常务副主席辜胜阻。梁凯昌 摄</span></p>
          <p style={{textIndent: '2em'}}>在桂期间，辜胜阻听取了自治区扶贫办、防城港市关于脱贫攻坚相关汇报，深入东兴口岸、东兴边民互市贸易区、东兴二桥、北部湾海产品交易市场及跨境劳务管理服务中心，实地察看边境开发开放、跨境劳务合作、边境经济合作区等情况，并召开边贸企业座谈会，围绕进一步推进边境地区脱贫攻坚，听取东兴市商务、边海防、口岸办等部门负责人及外贸企业代表建议。</p>
          <p style={{textIndent: '2em'}}>辜胜阻说，多年来广西全面贯彻落实党中央、国务院关于深入实施兴边富民行动的战略部署,以边贸扶贫为抓手，充分依托区位优势，用好用足边贸税收政策，大力发展边境互市贸易，千方百计增加边民收入，取得可喜成绩。辜胜阻指出，边境地区脱贫攻坚具有特殊性，既要实现脱贫摘帽，又要保障守边固边。民建中央将通过此次调研，就广西推进边境地区脱贫攻坚、兴边富民中遇到的困难和问题，积极提出意见建议。同时，将充分发挥民建组织密切联系经济界的优势，加大帮扶力度，助推广西坚决打赢脱贫攻坚战。</p>
          <p style={{textIndent: '2em'}}>黄伟京、钱学明分别参加有关活动。（陈贻泽 黄富强）</p>
        </div>
      </div>
    )
  }
}
