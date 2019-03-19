import React from 'react';
import RotationList from '../RotationList';
import RotationBar from '../RotationBar';

const RotationColumn = (props) => {
  const { list, onElementClick } = props;
  return <div className="CentralColumn">
    <RotationList list={list} onElementClick={onElementClick} />
    <RotationBar />
  </div>
};

export default RotationColumn;