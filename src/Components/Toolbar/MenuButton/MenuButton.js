import React from 'react';
import classes from './MenuButton.css';

import MenuButtonSVG from '../../../assets/menu.svg';

const MenuButton = props => (
    <button className={classes.MenuButton}>
        <img src={MenuButtonSVG} alt="Menu Button"/>
    </button>
);

export default MenuButton;