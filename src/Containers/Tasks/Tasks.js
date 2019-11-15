import React from "react";
import classes from "./Tasks.css";
// * Redux
import { connect } from "react-redux";


import * as taskActions from "../../store/actions/tasksActions";
import * as subMenuActions from '../../store/actions/subMenuActions';

import Task from "../../Components/Task/Task";

const Tasks = props => {
  return (
    <ul className={classes.List}>
      {props.tasks.map(t => (
        <Task
          task={t}
          key={t.id}
          deleteTask={props.deleteTask}
          tagsSubMenu={props.tagsSubMenu}
          openTagsMenu={props.openTagsMenu}
          removeTag={props.removeTaskTag}
          changePriority = {props.changeTaskPriority}
        />
      ))}
    </ul>
  );
};

const mapStateTopProps = state => {
  return {
    tasks: state.tsk.tasks,
    tagsSubMenu: state.sbMenu.TaskTagMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openTagsMenu: taskId => dispatch(subMenuActions.openTagsMenu(taskId)),
    deleteTask: taskId => dispatch(taskActions.deleteTask(taskId)),
    removeTaskTag: (taskId, tagId) => dispatch(taskActions.removeTaskTag(taskId, tagId)),
    changeTaskPriority: (taskId, priority) => dispatch(taskActions.changeTaskPriority(taskId, priority)),
  };
};

export default connect(mapStateTopProps, mapDispatchToProps)(Tasks);
