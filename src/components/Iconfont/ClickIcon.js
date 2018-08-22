/**
 * @ Author: Dengfeng
 * @ Date: 2018/7/5
 * @ Purpose: ...
 **/
import Iconfont from "./Iconfont"
import PropTypes from "prop-types"
import styles from './ClickIcon.less'


const ClickIcon = ({ type, colorful = false, className, style, onClick, ...props }) => {
  return (
    <div
      onClick={() => { if (onClick) onClick() }}
      className={styles.icon}
      {...props}
    >
      <Iconfont type={type} colorful={colorful} className={className} style={style} />
    </div>
  )
}

Iconfont.propTypes = {
  type: PropTypes.string.isRequired,
  colorful: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
}

export default ClickIcon
