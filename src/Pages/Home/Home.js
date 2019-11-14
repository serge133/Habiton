import React from "react";
// import classes from "./Home.css";
import LayoutContext from '../../Context/layout';
import ToolBar from '../../Components/Toolbar/Toolbar';

const Home = props => {
  return (
    <div>
      <LayoutContext.Provider value={{ path: "/" }}>
        <ToolBar />
      </LayoutContext.Provider>
    </div>
  );
};

export default Home;
