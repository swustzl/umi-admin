import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './iconfont.less'

const Iconfont = ({ type, colorful = false, className, style }) => {
  if (colorful) {
    return (
      <svg className={classnames('colorful-icon', className)} aria-hidden="true" style={style}>
        <use xlinkHref={`#${type.startsWith('#') ? type.replace(/#/, '') : type}`} />
      </svg>
    )
  }

  return <i className={classnames('iconfont', [`icon-${type}`], className)} style={style} />
}

Iconfont.propTypes = {
  type: PropTypes.string.isRequired,
  colorful: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Iconfont
