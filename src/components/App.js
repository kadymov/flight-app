import React, { PropTypes, Component } from 'react';
import CarrierSelectFilter from '../containers/CarrierSelectFilter';
import VisibleFlightsList from '../containers/VisibleFlightsList';
import styles from './css/App.css';

export default class App extends Component {
  componentDidMount() {
      const { onMount } = this.props;
      onMount();
  }
  
  render() {
    const { isFetching } = this.props;
    
    
    if (!isFetching) {
      return <div className={styles.root}>
        <CarrierSelectFilter />
        <VisibleFlightsList />
      </div>;
    } else {
      return <div className={styles.root}>
        <div className={styles.loading}>Loading</div>
      </div>;
    }
  }
}

App.propTypes = {
  isFetching: PropTypes.bool.isRequire
};