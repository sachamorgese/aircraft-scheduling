import React from 'react';
import Aircraft from '../Aircraft';

const AircraftsList = props => {
  const { onElementClick, aircraftList, usageList } = props;
  return (
    <div className="SideListLeft">
      <span>Aircrafts</span>
      <ul className="SideListLeft__list">
        {aircraftList.length ? (
          aircraftList.map(child => (
            <Aircraft
              data={child}
              onElementClick={() => onElementClick(child.ident)}
              key={child.ident}
              usage={usageList[child.ident]}
            />
          ))
        ) : (
          <li className="Loading">Loading...</li>
        )}
      </ul>
    </div>
  );
};

export default AircraftsList;
