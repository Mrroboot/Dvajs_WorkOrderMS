import React, { Component } from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import SiderMenu from '../components/Navleft';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './../style/common.less'
import { connect } from 'dva';

// @connect(({ homes }) => ({ homes }))
class Homes extends Component {

  onCollapseChange = collapsed => {
    this.props.dispatch({
      type: 'homes/handleCollapseChange',
      payload: collapsed,
    })
  }

  render() {
    const { homes, dispatch } = this.props
    const { theme, collapsed } = homes
    const { onCollapseChange } = this
    const headerProps = {
      collapsed,
      onCollapseChange,
    }
  
    const siderProps = {
      theme,
      collapsed,
      onCollapseChange,
      onThemeChange(theme) {
        dispatch({
          type: 'homes/handleThemeChange',
          payload: theme,
        })
      },
    }
    return (
      <Row className={styles.container}>
      <Col span={4} className="nav-left">
        <SiderMenu { ...siderProps } />
      </Col>
      <Col span={20} className="main">
         <Header {...headerProps} />
        <Row className="content">
          
        </Row>
        <Footer />
      </Col>
    </Row>
    );
  } 

}

Homes.propTypes ={
  homes: PropTypes.object,
  dispatch: PropTypes.func,
}

//export default Homes;
export default connect(({ homes }) => ({
  homes,
}))(Homes);


//export default connect(['homes'],({homes})=>({...homes}))(Homes);