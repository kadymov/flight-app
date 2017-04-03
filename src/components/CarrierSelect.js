import React, { PropTypes, Component } from 'react';
import styles from './css/CarrierSelect.css';

export default class CarrierSelect extends Component {
  render() {
    const { carriers, onChange } = this.props;
    
    return <select
      className={styles.root}
      onChange={e => {
         e.preventDefault();
         onChange(e.currentTarget.value);
       }}>
      
      <option value="">Все авиакомании</option>
      
      {carriers.map(carrier =>
        <option 
          value={carrier}
          key={carrier}>
            {carrier}
        </option>
      )}
    </select>;
  }
}

CarrierSelect.propTypes = {
  carriers: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired
};