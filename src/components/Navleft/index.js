import React, { PureComponent } from 'react';
import PropType from 'prop-types';
import { Layout, Switch, Icon } from 'antd';
import Sidermenus from './menu';
import styles from './index.less';
import Scrollbar from '../ScrollBar';


class Navleft extends PureComponent {
    render(){
        
        const{
            theme ,
            collapsed ,
            
        } = this.props
        
        function onThemeChange(theme){
            return theme === 'dark' ? 'light' : 'dark'
        }

        console.log(theme)
        return(
        <Layout.Sider
            width={256}
            theme={theme}
            breakpoint="lg"
            trigger={null}
            collapsible 
            collapsed = {collapsed}                 
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
                  theme = {theme}    
                  collapsed = {collapsed}          
                  />
               </Scrollbar>
              </div>
             {collapsed ? null : ( 
                <div className={styles.switchTheme}>
                    <span className={styles.sty2}>
                    <Icon type="bulb" />
                    <span>Switch Theme</span>
                    </span>
                    <Switch
                    onChange={ () => onThemeChange }
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
    onThemeChange: PropType.func,
}

export default Navleft