import React ,{ PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import Navlink from './Navlink';
import menuconfig from './menuConfig';

const  SubMenu  = Menu.SubMenu;

class SiderMenu extends PureComponent {

    state = {
        openKeys: [],        
    };

    componentDidMount(){
        const menuTreeNode = this.renderMenu(menuconfig);
        this.setState({
            menuTreeNode
        })
    }   
    
    renderMenu = data => {
        return data.map(item => {
            if(item.children){
                return (
                    <SubMenu 
                        key={item.id} 
                        title={
                            <Fragment>
                                {item.icon && <Icon type={item.icon} />}
                                <span><span>{item.title}</span></span>
                            </Fragment>
                        } >
                        { this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (<Menu.Item  key={item.id}>
                <Navlink target={item.key} linkText={<span>{item.icon && <Icon
                    type={item.icon}/>}<span>{item.title}</span></span>}/>
            </Menu.Item>)
        })
    }
    
    rootSubmenKeys = menuconfig.map((item) => {    
        return (
            item.id
        )      
    });
    
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenKeys.indexOf(latestOpenKey) === -1) {
          this.setState({ openKeys });
        } else {
          this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
          });
        }    
    }     
   
    render() {
        const {
          collapsed,
          theme,
        } = this.props
    
        return (
          <Menu
            mode="inline"
            theme={theme}
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
            inlineCollapsed={collapsed}
          >       
            { this.state.menuTreeNode  }
          </Menu>       
        );
      }
    
}
    
SiderMenu.propTypes = {
    theme: PropTypes.string,
    collapsed: PropTypes.bool,
}
    
export default SiderMenu