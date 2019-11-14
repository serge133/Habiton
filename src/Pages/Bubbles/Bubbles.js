import React from "react";
import classes from "./Bubbles.css";
import LayoutContext from "../../Context/layout";
import ToolBar from "../../Components/Toolbar/Toolbar";


const Bubbles = props => {
  return (
    <div className={classes.Layout}>
      <LayoutContext.Provider value={{ path: "/bubbles" }}>
        <ToolBar />
      </LayoutContext.Provider>
    </div>
  );
};

export default Bubbles;
