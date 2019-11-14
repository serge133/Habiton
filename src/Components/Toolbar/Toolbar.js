import React from 'react';
import classes from './Toolbar.css';
import MenuButton from './MenuButton/MenuButton';
import Label from './Label/Label';
import NavTabs from './NavTabs/NavTabs';

const Toolbar = props => {
    return (
        <div className={classes.Toolbar}>
            <MenuButton/>
            <Label/>
            <NavTabs/>
        </div>
    );
};

export default Toolbar;