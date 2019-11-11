import React from "react";
import classes from "./NavTabs.css";

const NavTabs = props => {
  const NavTab = ({ name, active }) => {
    return <li className={active ? classes.NavTab_active : classes.NavTab}>{name}</li>;
  };
  return (
    <ul className={classes.NavTabs}>
      <NavTab name="Tasks" active={true}/>
      <NavTab name="Bubbles" active={false}/>
      <NavTab name="Tasks" active={false}/>
    </ul>
  );
};

export default NavTabs;
