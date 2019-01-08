import React from 'react';
import SiderMenu from '../components/Navleft';

import { connect } from 'dva';

const  homes = ({ dispatch, products }) => {
    function onThemeChange(theme) {
        dispatch({
          type: 'home/handleThemeChange',
          payload: theme,
        });
    }
    return (
        <div>
            <SiderMenu theme={onThemeChange} collapsed={false} />
        </div>
    );
};

export default connect(({ home }) => ({
    home,
}))(homes);