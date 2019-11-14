import * as actionTypes from './actionTypes';

export const openTagsMenu = taskId => {
    return {
        type: actionTypes.OPEN_TAGS_MENU,
        taskId: taskId
    }
}

