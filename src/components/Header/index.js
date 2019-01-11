import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Layout, Avatar, Popover, Badge, List } from 'antd';
import classnames from 'classnames';
import styles from './index.less';

const { SubMenu } = Menu
class Header extends React.PureComponent {
   
    constructor(props) {
        super(props);
        this.state = {
          fixed: false,   
        //   collapsed: null,
        //   onCollapseChange : () =>{
        //         return !this.state.collapsed
        //   }
        }
    }


    // handelClickMenu = e => {
    //     e.key === 'SignOut' && this.props.onSignOut()
    // };
   
    // onCollapseChange = () =>{
    //     const now = this.state.collapsed;
    //     this.setState({
    //       collapsed: !now
    //     })
    //     console.log(this.state.collapsed)

    // };

    render() {
       const {
           collapsed,
           onCollapseChange,
       } = this.props
        const rightContent = [
            <Menu key="user" mode="horizontal" >
                    <SubMenu
                     title={
                        <React.Fragment>
                            <span style={{ color: '#999', marginRight: 4 }}>
                                Hi,
                            </span>
                            <span>YXWANG</span>
                            <Avatar style={{ marginLeft: 8 }}/>
                        </React.Fragment>}>
                        <Menu.Item>
                            Sign Out
                        </Menu.Item>
                    </SubMenu>
                </Menu>       
        ]
        
        // rightContent.unshift(
        //     <Popover
        //         placement="bottomRight"
        //         trigger="click"
               
        //         overlayClassName={styles.notificationPopover}
        //         getPopupContainer={() => document.querySelector('#layoutHeader')}
        //         content={
        //         <div className={styles.notification}>
        //             <List
        //             itemLayout="horizontal"
        //             locale={{
        //                 emptyText: <span>You have viewed all notifications.</span>,
        //             }}
        //             renderItem={item => (
        //                 <List.Item className={styles.notificationItem}>
        //                 <List.Item.Meta
                           
        //                 />
        //                 <Icon
        //                     style={{ fontSize: 10, color: '#ccc' }}
        //                     type="right"
        //                     theme="outlined"
        //                 />
        //                 </List.Item>
        //             )}
        //             />
        //         </div>
        //         }>
        //         <Badge
        //         dot
        //         offset={[-10, 10]}
        //         className={styles.iconButton}
        //         >
        //         <Icon className={styles.iconFont} type="bell" />
        //         </Badge>
        //     </Popover>
        // )
        return(
            <Layout.Header
            className={classnames(styles.header, {
              [styles.fixed]: this.state.fixed,
              [styles.collapsed]: collapsed,
            })}
            id="layoutHeader"
          >
            <div
              className={styles.button}
              onClick={onCollapseChange.bind(this, !collapsed)}
            >
              <Icon
                type={classnames({
                  'menu-unfold': collapsed,
                  'menu-fold': !collapsed,
                })}
              />
            </div>
    
            <div className={styles.rightContainer}>{rightContent}</div>
          </Layout.Header>
        )
        
    }
}

Header.propTypes = {
    fixed: PropTypes.bool,
    collapsed: PropTypes.bool,
    user: PropTypes.object,
    onSignout: PropTypes.func,
    onCollapseChange: PropTypes.func,
}

export default Header