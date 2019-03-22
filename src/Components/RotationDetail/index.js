import React from 'react';
import { ReactComponent as Arrow } from './arrow-right.svg';

const RotationDetail = props => {
  const {
    onElementClick,
    data,
    data: {
      ident,
      destination,
      origin,
      readable_arrival: readableArrival,
      readable_departure: readableDeparture,
    },
  } = props;

  return (
    <li>
      <button onClick={() => onElementClick(data)} type="button">
        <span>{ident}</span>
        <div className="spanArrowContainer">
          <div className="spanContainer">
            <span>{origin}</span>
            <span>{readableDeparture}</span>
          </div>
          <Arrow className="arrowImage" />
          <div className="spanContainer">
            <span>{destination}</span>
            <span>{readableArrival}</span>
          </div>
        </div>
      </button>
    </li>
  );
};

export default RotationDetail;
