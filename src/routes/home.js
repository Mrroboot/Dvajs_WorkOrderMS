import React from 'react';
import SiderMenu from '../components/Navleft';

import {connect} from 'dva';

const homes = () => {
  return (
    <SiderMenu/>
  );
};

export default connect()(homes);
