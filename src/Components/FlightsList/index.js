import React from 'react';
import Flight from '../Flight';

const FlightsList = props => {
  const { onElementClick, flightList } = props;
  return (
    <div className="SideListRight">
      <span>Flights</span>
      <ul>
        {flightList.map(child => (
          <Flight
            data={child}
            onElementClick={() => onElementClick(child)}
            key={child.ident}
          />
        ))}
      </ul>
    </div>
  );
};

export default FlightsList;
