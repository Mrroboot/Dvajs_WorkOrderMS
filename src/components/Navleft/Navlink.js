import React from 'react';
import {Link} from 'dva/router';
import { link } from './Navlink.less';

const Navlink = ({target, linkText}) =>(
    <Link to={target} className={link}>{linkText}</Link>
);

export default Navlink