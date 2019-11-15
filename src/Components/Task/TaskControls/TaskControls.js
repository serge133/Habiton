import React from "react";
import classes from "./TaskControls.css";
import tagSVG from "../../../assets/tag.svg";
import prioritySVG from "../../../assets/arrow.svg";
import trashSVG from "../../../assets/trash.svg";

const TaskControl = props => {
  const priorityColors = ['#ccc', 'black', 'red'];

  const priorityStyle = {
    fontSize: '2rem',
    marginBottom: 25,
    color: priorityColors[props.task.priority - 1],
  };

  return (
    <div className={classes.Controls}>
      <img
        className={classes.Control}
        style={props.isTaskMenuSelected ? { opacity: 0.8 } : null}
        src={tagSVG}
        alt="set a tag"
        onClick={() => props.toggleTags(props.task.id)}
      />
      <div
        className={classes.Control}
        style={priorityStyle}
        onClick={props.togglePriority}
      >
        &#8593;
      </div>
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
