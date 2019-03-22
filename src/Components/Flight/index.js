import React from "react";

const Flight = (props) => {
  const { onElementClick, data: { id, destination, origin, readable_arrival: readableArrival, readable_departure: readableDeparture } } = props;
  
  return (
    <li>
      <button onClick={onElementClick} type="button">
        <span>{ id }</span>
        <span>{ `${origin}, ${destination}` }</span>
        <span>{ `${readableDeparture}, ${readableArrival}` }</span>
      </button>
    </li>
  )
};

export default Flight;