import * as ActionTypes from '../constants/ActionTypes';

const visibilityFilter = (state = '', action) => {
  switch (action.type) {
    case ActionTypes.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;