import React from 'react';
import classes from './Toolbar.css';
import Label from './Label/Label';
import NavTabs from './NavTabs/NavTabs';

const Toolbar = props => {
    return (
        <div className={classes.Toolbar}>
            <Label/>
            <NavTabs/>
        </div>
    );
};

export default Toolbar;