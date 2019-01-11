import React from 'react';
import PropType from 'prop-types';
import {Layout, Switch, Icon} from 'antd';
import Sidermenus from './menu';
import styles from './index.less';
import Scrollbar from '../ScrollBar';


class Navleft extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     theme: "light",
  //   }
  // }
  
  // onThemeChange = () => {
  //   const now = this.state.theme === 'dark' ? 'light' : 'dark';

  //   this.setState({
  //     theme: now
  //   })
  // };

  render() {
    const {
      theme,
      onThemeChange,
      collapsed,
      onCollapseChange,
    } = this.props
    return (
      <Layout.Sider
        width={215}
        theme={theme}
        breakpoint="lg"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={styles.sider}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src="logo-ant.svg" alt="logo"/>
            {console.log(collapsed)}
            {console.log(theme)}
            {collapsed? null:<h1>WORK ORDER MS</h1>}
          </div>
        </div>
        <div className={styles.menuContainer}>
          <Scrollbar
            option={{
              suppressScrollX: true,
            }}
          >
            <Sidermenus
              theme={theme}
              collapsed={collapsed}
              onCollapseChange={onCollapseChange}
            />
          </Scrollbar>
        </div>
        {collapsed ? <div className={styles.switchTheme}></div> : (
          <div className={styles.switchTheme}>
                    <span 
                      className={ theme === 'dark' ? styles.sty2: null }>
                    <Icon type="bulb"/>
                    <span>Switch Theme</span>
                    </span>
            <Switch
              onChange={ onThemeChange.bind(
                this,
                theme === 'dark' ? 'light' : 'dark'
              )}
              defaultChecked={theme === 'dark'}
              checkedChildren={`Dark`}
              unCheckedChildren={`Light`}
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
  onCollapseChange: PropType.func,
  onThemeChange: PropType.func,
}

export default Navleft
