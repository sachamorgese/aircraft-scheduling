import React from "react";

const RotationDetail = (props) => {
  const { onElementClick, data, data: { id, destination, origin, readable_arrival: readableArrival, readable_departure: readableDeparture } } = props;
  
  return (
    <li>
      <button onClick={() => onElementClick(data)} type="button">
        <span>{ id }</span>
        <span>{ `${origin}, ${destination}` }</span>
        <span>{ `${readableDeparture}, ${readableArrival}` }</span>
      </button>
    </li>
  )
};

export default RotationDetail