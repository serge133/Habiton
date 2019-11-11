import { updateObject } from '../utility';

const initialState = {
  test: 'Redux Connected!'
};

const reducer = (state = initialState, action) => {
  // TODO: Logic Goes here
  switch (action.type) {
    default:
      return state;
  };
};

export default reducer;
