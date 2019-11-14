import React from "react";
import classes from "./Tasks.css";
import LayoutContext from "../../Context/layout";
import TaskList from "../../Containers/Tasks/Tasks";
import ToolBar from "../../Components/Toolbar/Toolbar";
const Tasks = props => {
  return (
    <div className={classes.Layout}>
      <LayoutContext.Provider value={{ path: "/tasks" }}>
        <ToolBar />
      </LayoutContext.Provider>

      <TaskList/>
    </div>
  );
};

export default Tasks;
