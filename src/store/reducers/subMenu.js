import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';  

const initialState = {
    // task Id
    TaskTagMenu: ''
}

const openTagsMenu = (state, action) => {
    let taskId = '';
    if(action.taskId !== state.TaskTagMenu)taskId = action.taskId
    return updateObject(state, {TaskTagMenu: taskId})
}

const subMenuReducer = (state = initialState, action) => {
    switch( action.type ) {
        case actionTypes.OPEN_TAGS_MENU:
            return openTagsMenu(state, action)
        default:
            return state;
    }
}

export default subMenuReducer;