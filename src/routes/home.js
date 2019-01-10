import React from 'react';
import SiderMenu from '../components/Navleft';

import {connect} from 'dva';

const homes = ({dispatch, theme, collapsed}) => {
  return (
    <div>
      <SiderMenu theme={theme} collapsed={collapsed}/>
    </div>
  );
};

function mapStateToProps(state) {
  const {theme, collapsed} = state.home;
  return {
    theme,
    collapsed,
  };
}

export default connect(mapStateToProps)(homes);
