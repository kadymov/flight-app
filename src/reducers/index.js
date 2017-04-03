import { combineReducers } from 'redux';
import flights from './flights';
import visibilityFilter from './visibilityFilter';

const flightsReducer = combineReducers({
  flights,
  visibilityFilter
});

export default flightsReducer;