import * as actionTypes from "./actionTypes";

// * Action Creators
export const deleteTask = taskId => {
  return {
    type: actionTypes.DELETE_TASK,
    taskId: taskId
  };
};


export const addTag = tagName => {
  return {
      type: actionTypes.ADD_TAG,
      tagName: tagName
  };
};

export const deleteTag = tagId => {
  return {
    type: actionTypes.DELETE_TAG,
    tagId: tagId
  }
};

export const applyTag = (tag, taskId) => {
  return {
    type: actionTypes.APPLY_TAG,
    tag: tag,
    taskId: taskId
  }
};

export const changeTagColor = (tagId, color) => {
  return {
    type: actionTypes.CHANGE_TAG_COLOR,
    tagId: tagId,
    color: color
  }
};

export const removeTaskTag = (taskId, tagId) => {
  return {
    type: actionTypes.REMOVE_TASK_TAG,
    taskId: taskId,
    tagId: tagId
  }
};