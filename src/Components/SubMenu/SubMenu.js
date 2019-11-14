import React from 'react';
import classes from './SubMenu.css';

const SubMenu = props => (
    <div className={classes.Popup} style = {props.show ? {bottom: props.bottom, right: props.right} : {display: 'none'}}>
        <div className={classes.Arrow}/>
        {props.children}
    </div>
);

export default SubMenu;