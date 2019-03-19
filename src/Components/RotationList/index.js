import React from 'react';
import RotationDetail from '../RotationDetail';


const RotationList = (props) => {
  const { className, onElementClick, list } = props;
  return <div className={className}>
    <ul>
      {
        list.map(child => (
          <RotationDetail
            onElementClick={onElementClick}
            data={child}
            key={child.id}
          />
        ))
      }
    </ul>
  </div>
};

export default RotationList;