import React from "react";
import classes from "./Task.css";
import PropTypes from 'prop-types';
import TaskControls from "./TaskControls/TaskControls";

import Tags from "../../Containers/Tags/Tags";

import TaskTags from './Tags/Tags';

const Task = props => {
  const isTaskMenuSelected = props.tagsSubMenu === props.task.id ? true : false;

  const handleRemoveTaskTag = tagId => {
    props.removeTag(props.task.id, tagId);
  }

  return (
    <li className={classes.Task}>
      {props.task.name}
      <TaskControls
        task={props.task}
        toggleTags={props.openTagsMenu}
        deleteTask={props.deleteTask}
        isTaskMenuSelected={isTaskMenuSelected}
      />
      <TaskTags tags={props.task.tags} removeTag={handleRemoveTaskTag}/>
      {isTaskMenuSelected ? <Tags task={props.task}/> : null}
    </li>
  );
};


Task.propTypes = {
  task: PropTypes.object.isRequired,
  removeTag: PropTypes.func.isRequired
}


export default Task;
