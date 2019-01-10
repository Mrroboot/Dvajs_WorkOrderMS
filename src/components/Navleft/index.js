import React from 'react';
import PropType from 'prop-types';
import {Layout, Switch, Icon} from 'antd';
import Sidermenus from './menu';
import styles from './index.less';
import Scrollbar from '../ScrollBar';


class Navleft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",
      collapsed: false
    }
  }

  onThemeChange = () => {
    const now = this.state.theme === 'dark' ? 'light' : 'dark';

    this.setState({
      theme: now
    })
  };

  render() {

    return (
      <Layout.Sider
        width={256}
        theme={this.state.theme}
        breakpoint="lg"
        trigger={null}
        collapsible
        collapsed={false}
        className={styles.sider}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src="logo-ant.svg" alt="logo"/>
            <h1>WORK ORDER MS</h1>
          </div>
        </div>
        <div className={styles.menuContainer}>
          <Scrollbar
            option={{
              suppressScrollX: true,
            }}
          >
            <Sidermenus
              theme={this.state.theme}
              collapsed={false}
            />
          </Scrollbar>
        </div>
        {this.state.collapsed ? null : (
          <div className={styles.switchTheme}>
                    <span className={styles.sty2}>
                    <Icon type="bulb"/>
                    <span>Switch Theme</span>
                    </span>
            <Switch
              onChange={this.onThemeChange}
              defaultChecked={this.state.theme === 'dark'}
            />
          </div>
        )}
      </Layout.Sider>
    )
  }
}

Navleft.propTypes = {
  theme: PropType.string,
  collapsed: PropType.bool,
  onThemeChange: PropType.func,
}

export default Navleft
