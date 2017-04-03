import fetch from 'isomorphic-fetch';
import * as ActionTypes from '../constants/ActionTypes';

export const setVisibilityFilter = (filter) => {
  return {
    type: ActionTypes.SET_VISIBILITY_FILTER,
    filter
  };
};

export const requestData = () => {
  return {
    type: ActionTypes.LOAD_DATA_REQUESTED
  };
};

export const receiveData = (json) => {
  return {
    type: ActionTypes.LOAD_DATA_OK,
    json
  };
};

export const fetchData = () => {
  return (dispatch) => {
    
    dispatch(requestData());
    
    return fetch('data.json')
      .then(response => response.json())
      .then(json => dispatch(receiveData(json)));

      // TODO: Errors
  };
};

