import React from 'react';
import classNames from 'classnames';
import styles from './NumberView.less';

export default class NumberView extends React.Component{
  componentWillMount () {
    this.handleNumber(this.props)
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.number !== this.props.number || nextProps.bit !== this.props.bit) {
      this.handleNumber(nextProps)
    }
  }
  handleNumber = (props) => {
    let { number = 0, bit } = props;
    let numbers = [];
    while (bit--) {
      numbers.push(Math.floor(number % 10).toString());
      number /= 10;
    }
    this.setState({ numbers })
  };
  renderNumber = () => {
    const { numbers = [] } = this.state;
    let show = []
    for (let i = numbers.length - 1; i >= 0; i--) {
      show.push(
        <div
          key={i}
          className={styles.item}
        ><span>{numbers[i]}</span></div>
      )
    }
    return show;
  };
  render () {
    return (
      <div className={classNames(styles.number, this.props.className)}>
        {this.renderNumber()}
      </div>
    )
  }
}
