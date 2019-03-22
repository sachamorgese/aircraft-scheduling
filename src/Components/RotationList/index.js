import React from 'react';
import RotationDetail from '../RotationDetail';


const RotationList = (props) => {
  const { className, onElementClick, list: { flights } } = props;
  return <div className={className}>
    <ul>
      {
        flights && flights.map(child => (
          <RotationDetail
            onElementClick={onElementClick}
            data={child}
            key={child.ident}
          />
        ))
      }
    </ul>
  </div>
};

export default RotationList;