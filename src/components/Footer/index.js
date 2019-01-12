import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb, Icon } from 'antd'
import styles from './index.less'

class Footer extends PureComponent {
  
  render() {

    return (
      <Breadcrumb className={styles.Footer}>
       
      </Breadcrumb>
    )
  }
}

Footer.propTypes = {
  routeList: PropTypes.array,
}

export default Footer
