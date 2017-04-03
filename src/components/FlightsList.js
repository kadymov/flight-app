import React, { PropTypes, Component } from 'react';
import Flight from './Flight';
import styles from './css/FlightsList.css';

export default class FlightsList extends Component {
  render() {
    const { flights } = this.props;
    
    return <ul className={ styles.root }>
      {flights.map(flight =>
        <Flight
          key={flight.id}
          carrier={flight.carrier}
          from={flight.direction.from}
          to={flight.direction.to}
          departure={flight.departure}
          arrival={flight.arrival}
        />
      )}
    </ul>;
  }
}

FlightsList.propTypes = {
  flights: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired
  }).isRequired).isRequired
};