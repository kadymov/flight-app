import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
	isFetching: false,
	items: []
};

const flights = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.LOAD_DATA_REQUESTED:
			return Object.assign({}, state, {
		        isFetching: true
			});
		case ActionTypes.LOAD_DATA_OK:
			return Object.assign({}, state, {
		        isFetching: false,
		        items: action.json.flights
			});
		default:
			return state;
	}
};

export default flights;