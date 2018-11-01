import React from 'react';
import classNames from 'classnames';
import styles from './VCode.less';

export default class VCode extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      ...this.initState(),
    }
  }

  initState(){
    let code = {
      data: this.getCode(4),
      rotate: this.getRandom(75,-75,4),
      color: [this.getRandom(50,205,3),this.getRandom(50,205,3),this.getRandom(50,205,3),this.getRandom(50,205,3)]
    };
    const { size = 'default' } = this.props;
    switch (size) {
      case 'small':
        code.fz = this.getRandom(14,20,4);
        break;
      case 'large':
        code.fz = this.getRandom(18,30,4);
        break;
      default:
        code.fz = this.getRandom(16,25,4);
    }
    this.props.callback && this.props.callback(code);
    return code;
  }
  getCode = (num) => {
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const maxStr = str.length;
    let data = [];
    for (let i = 0; i < num; i++) {
      data.push(str.charAt(Math.floor(Math.random() * maxStr)));
    }
    return data;
  }
  getRandom(max, min, num) {
    const asciiNum = ~~(Math.random()*(max-min+1)+min)
    if(!Boolean(num)){
      return asciiNum
    }
    const arr = []
    for(let i = 0; i < num; i++){
      arr.push(this.getRandom(max, min))
    }
    return arr
  }

  canvas() {
    const { getRandom } = this
    const canvas = document.getElementById('bgi')
    let ctx = canvas.getContext('2d')
    //canvas.height = canvas.height
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = `rgb(${this.getRandom(100,200,3).toString()})`;
    ctx.beginPath();
    for( let i = 0; i< 8; i++ ) {
      ctx.moveTo(getRandom(canvas.width,0),getRandom(canvas.height,0))
      ctx.lineTo(getRandom(canvas.width,0),getRandom(canvas.height,0))
      ctx.stroke();
    }
  }
  componentDidMount() {
    this.canvas()
  }

  render() {
    const { className, size = 'default' } = this.props;
    const { rotate, fz, color } = this.state;
    let mainClass = styles.vcodewrap;
    switch (size) {
      case 'small':
        mainClass = classNames(styles.vcodewrap, styles.smallMain);
        break;
      case 'large':
        mainClass = classNames(styles.vcodewrap, styles.largeMain);
        break;
      default:
        mainClass = classNames(styles.vcodewrap, styles.defaultMain);
    }
    return (
      <div className={classNames(mainClass, className)} >
        <canvas id="bgi" className={styles.bgi}></canvas>
        <div className={styles.content}>
          {this.state.data.map((v,i) =>
            <div
              key={i}
              className={styles.itemStr}
              style={{
                transform:`rotate(${rotate[i]}deg)`,
                fontSize: `${fz[i]}px`,
                color: `rgb(${color[i].toString()})`
              }}
            >
              {v}
            </div>
          )}
        </div>
        <div
          id="bgi_mask"
          className={classNames(styles.mask)}
          onClick={() => {
            this.setState({...this.initState()})
            this.canvas()
          }}
        > 点击刷新
        </div>
      </div>
    )
  }
}
