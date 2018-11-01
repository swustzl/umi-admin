/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import qs from 'qs';
import { Button } from 'antd';

export default class extends Component {
  state = {
    visible: false,
  }

  download = (e, getCondition, url) => {
    e.stopPropagation();
    const condition = {
      Authorization: `${localStorage.getItem('token')}`,
      ...getCondition(),
    };
    const downloadHref = `${url}?${qs.stringify(condition)}`;
    const element = document.getElementById('downLoadBt');
    element.setAttribute('href', downloadHref);
    element.click();
  };

  render() {
    const { disabled, text, getCondition, url } = this.props;
    return (
      <span>
        <a id={'downLoadBt'} rel="noopener noreferrer" target="_blank" />
        <Button onClick={e => this.download(e, getCondition, url)} disabled={disabled} type="primary">{text}</Button>
      </span>
    );
  }
}
