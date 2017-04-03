import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import CarrierSelect from '../components/CarrierSelect'

const mapStateToProps = (state) => {
  var carriers = state.flights.items.map((flight) => flight.carrier);
    
  return {
    carriers: [...new Set(carriers)]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (value) => {
      dispatch(setVisibilityFilter(value));
    }
  };
};

const CarrierSelectFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CarrierSelect);

export default CarrierSelectFilter;