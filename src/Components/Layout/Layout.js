import React, { Fragment } from 'react';
import Toolbar from './Toolbar/Toolbar';
import classes from './Layout.css';

const Layout = props => {
    return (
        <Fragment>
            <Toolbar/>

            {props.children}
        </Fragment>
    );
};

export default Layout;