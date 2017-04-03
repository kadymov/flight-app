import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import FlightsList from '../components/FlightsList';

const getVisibleFlights = (flights, filter) => {
  return flights.filter((flight) => !filter || flight.carrier === filter);
};

const mapStateToProps = (state) => {
  return {
    flights: getVisibleFlights(state.flights.items, state.visibilityFilter)
  };
};

const VisibleFlightsList = connect(
  mapStateToProps
)(FlightsList);

export default VisibleFlightsList;