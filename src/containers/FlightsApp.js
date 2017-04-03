import { connect } from 'react-redux';
import { fetchData } from '../actions';
import App from '../components/App';


const mapStateToProps = (state) => {
  return {
    isFetching: state.flights.isFetching
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    onMount: () => {
      dispatch(fetchData());
    }
  };
};

const FlightsApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default FlightsApp;