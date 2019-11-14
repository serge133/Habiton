import React from "react";
import classes from "./TaskControls.css";
import tagSVG from "../../../assets/tag.svg";
import prioritySVG from "../../../assets/arrow.svg";
import trashSVG from "../../../assets/trash.svg";

const TaskControl = props => {
  const priorityStyle = {
    transform: `rotate(${90}deg)`
  };

  return (
    <div className={classes.Controls}>
      <img
        className={classes.Control}
        style={props.isTaskMenuSelected ? {opacity: 0.8} : null}
        src={tagSVG}
        alt="set a tag"
        onClick={() => props.toggleTags(props.task.id)}
      />
      <img
        className={classes.Control}
        src={prioritySVG}
        style={priorityStyle}
        alt="Set Priority"
      />
      <img
        className={classes.Control}
        src={trashSVG}
        alt="Delete Task"
        onClick={() => props.deleteTask(props.task.id)}
      />
    </div>
  );
};

export default TaskControl;
