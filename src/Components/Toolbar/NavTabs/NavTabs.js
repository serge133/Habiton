import React, { useContext } from "react";
import classes from "./NavTabs.css";

import layoutContext from '../../../Context/layout';
import { Link } from 'react-router-dom';

const NavTabs = props => {
  const currentPath = useContext(layoutContext).path;

  const NavTab = ({ name, path }) => {
    return <Link to={path} className={currentPath === path ? classes.NavTab_active : classes.NavTab}>{name}</Link>;
  };
  return (
    <ul className={classes.NavTabs}>
      <NavTab name="Home" path="/"/>
      <NavTab name="Tasks" path="/tasks"/>
      <NavTab name="Bubbles" path="/bubbles"/>
    </ul>
  );
};

export default NavTabs;
