import React from 'react';
import Aircraft from '../Aircraft';

const AircraftsList = (props) => {
  const { className, onElementClick, list, usage } = props;
  return <div className={className}>
      <ul>
      {
        list.map(child => (
          <Aircraft
            data={child}
            onElementClick={() => onElementClick(child.ident)}
            key={child.ident}
            usage={usage[child.ident]}
          />
        ))
      }
      </ul>
    </div>
};

export default AircraftsList;