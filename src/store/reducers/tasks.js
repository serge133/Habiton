import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import nanoid from "nanoid";

const initialState = {
  tags: [],
  tasks: [
    {
      id: "1",
      name: "Dancing",
      tags: [],
      due: "",
      finished: false,
      priority: 3,
      subTasks: []
    },
    {
      id: "2",
      name: "Swimming",
      tags: [],
      due: "",
      finished: false,
      priority: 2,
      subTasks: []
    }
  ]
};
// * Task Actions
const deleteTask = (state, action) => {
  const copyTasks = [...state.tasks];
  const taskIndex = copyTasks.findIndex(t => t.id === action.taskId);
  if (taskIndex < 0) return state;
  copyTasks.splice(taskIndex, 1);
  return updateObject(state, { tasks: copyTasks });
};

// * Task Tag Actions
const addTag = (state, action) => {
  const newTag = {
    id: nanoid(),
    name: action.tagName,
    color: "#ededed"
  };
  const newTags = state.tags.concat([newTag]);
  return updateObject(state, { tags: newTags });
};

const deleteTag = (state, action) => {
  const copyTags = [...state.tags];
  const tagIndex = copyTags.findIndex(tag => tag.id === action.tagId);
  if (tagIndex < 0) return state;
  copyTags.splice(tagIndex, 1);
  return updateObject(state, { tags: copyTags });
};

const applyTag = (state, action) => {
  const copyTasks = [...state.tasks];
  const taskIndex = copyTasks.findIndex(t => t.id === action.taskId);
  if (taskIndex < 0) return state;
  const copyTags = [...copyTasks[taskIndex].tags];
  const isDuplicatTag = copyTags.findIndex(tag => tag.id === action.tag.id);
  if (isDuplicatTag >= 0) {
    copyTags[isDuplicatTag] = action.tag;
    return updateObject(state, { tasks: copyTasks });
  } else {
    const newTags = copyTags.concat([action.tag]);
    copyTasks[taskIndex].tags = newTags;
    return updateObject(state, { tasks: copyTasks });
  }
};

const changeTagColor = (state, action) => {
  const copyTags = [...state.tags];
  const tagIndex = copyTags.findIndex(tag => tag.id === action.tagId);
  if (tagIndex < 0) return state;
  copyTags[tagIndex].color = action.color;
  return updateObject(state, { tags: copyTags });
};

const removeTaskTag = (state, action) => {
  const copyTasks = [...state.tasks];
  const taskIndex = copyTasks.findIndex(t => t.id === action.taskId);
  console.log(action.taskId);
  if (taskIndex < 0) return state;
  const tags = copyTasks[taskIndex].tags;
  const tagsIndex = tags.findIndex(tag => tag.id === action.tagId);
  if (tagsIndex < 0) return state;
  tags.splice(tagsIndex, 1);
  return updateObject(state, { tasks: copyTasks });
};

const reducer = (state = initialState, action) => {
  // TODO: Logic Goes here
  switch (action.type) {
    case actionTypes.DELETE_TASK:
      return deleteTask(state, action);
    case actionTypes.ADD_TAG:
      return addTag(state, action);
    case actionTypes.APPLY_TAG:
      return applyTag(state, action);
    case actionTypes.CHANGE_TAG_COLOR:
      return changeTagColor(state, action);
    case actionTypes.DELETE_TAG:
      return deleteTag(state, action);
    case actionTypes.REMOVE_TASK_TAG:
      return removeTaskTag(state, action);
    default:
      return state;
  }
};

export default reducer;
