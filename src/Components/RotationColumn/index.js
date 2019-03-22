import React from 'react';
import RotationList from '../RotationList';
import RotationBar from '../RotationBar';

const RotationColumn = props => {
  const { rotation, onElementClick, selectedAircraft } = props;
  return (
    <div className="CentralColumn">
      <span
        className={`CentralColumn__rotationSpan ${!selectedAircraft &&
          'CentralColumn__rotationSpan--invisible'}`}
      >
        {`Rotation ${selectedAircraft}`}
      </span>
      <RotationList rotation={rotation} onElementClick={onElementClick} />
      <RotationBar rotation={rotation} />
    </div>
  );
};

export default RotationColumn;
