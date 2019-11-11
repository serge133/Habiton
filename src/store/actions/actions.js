import * as actionTypes from './actionTypes';

// * Action Creators
export const exampleActionCreator = payload => {
  // ! Do not put logic in here only in reducer
  return {
    type: actionTypes.EXAMPLE_ACTION_TYPE,
    payload: payload
  };
};

export const asyncExampleActionCreator = () => {
  // ! Do not put logic in here only in reducer
  // * Asynchronous Opperation (redux-thunk)
  return dispatch => {
    setTimeout(() => dispatch({ type: EXAMPLE_ACTION_TYPE }), 2000);
  };
};
