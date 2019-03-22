import React from 'react';
import Aircraft from '../Aircraft';

const AircraftsList = props => {
  const { className, onElementClick, list, usageList } = props;
  return (
    <div className={className}>
      <ul>
        {list.map(child => (
          <Aircraft
            data={child}
            onElementClick={() => onElementClick(child.ident)}
            key={child.ident}
            usage={usageList[child.ident]}
          />
        ))}
      </ul>
    </div>
  );
};

export default AircraftsList;
