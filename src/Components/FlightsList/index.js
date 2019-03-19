import React from 'react';
import Flight from '../Flight';

const FlightsList = (props) => {
  const { className, onElementClick, list } = props;
  return <div className={className}>
      <ul>
      {
        list.map(child => (
          <Flight
            data={child}
            onElementClick={() => onElementClick(child)}
            key={child.id}
          />
        ))
      }
      </ul>
    </div>
};

export default FlightsList;