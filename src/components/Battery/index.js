import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

export default class Battery extends React.Component{
  render(){
    const { className, percent = 0, text = '', topClassName, spanClassName, spanStyle, fontTop = 20, bgColor='#25a0e9', markColor='#2c66a5', renderBottom } = this.props;
    return(
      <div className={classNames(styles.main, className)}>
        <div className={classNames(styles.top,topClassName)}>{percent}%</div>
        <div className={styles.content} style={{backgroundColor: bgColor}}>
          <div className={styles.mark} style={{ backgroundColor:markColor, height: `${percent}%`}}/>
          <div className={styles.font} style={{top: fontTop}}>
            <div className={classNames(styles.span, spanClassName)} style={spanStyle}>{text}</div>
          </div>
        </div>
        <div className={styles.bottom}>
          {renderBottom && renderBottom()}
        </div>
      </div>
    )
  }
}
