import React, { PropTypes, Component } from 'react';
import moment from 'moment';
import styles from './css/Flight.css';

const DATE_FORMAT = 'DD.MM.YYYY HH:mm';

export default class Flight extends Component {
  render() {
    const { from, to, carrier, arrival, departure } = this.props;
    
    const arrivalFormatted = moment(arrival).format(DATE_FORMAT);;
    const departureFormatted = moment(departure).format(DATE_FORMAT);;
    
    return <li>
      <div className={styles.direction}>Из <strong>{from}</strong> в <strong>{to}</strong></div>
      <div className={styles.time}>{arrivalFormatted} - {departureFormatted}</div>
      <div className={styles.carrier}>{carrier}</div>
    </li>;
  }
}

Flight.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  arrival: PropTypes.string.isRequired,
  departure: PropTypes.string.isRequired,
  carrier: PropTypes.string.isRequired
};