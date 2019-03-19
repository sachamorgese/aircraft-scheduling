import React from "react";

const Flight = (props) => {
  const { onElementClick, data: { id, destination, origin, readable_arrival, readable_departure } } = props;
  
  return (
    <li onClick={onElementClick}>
      <span>{ id }</span>
      <span>{ `${origin}, ${destination}` }</span>
      <span>{ `${readable_departure}, ${readable_arrival}` }</span>
    </li>
  )
};

export default Flight;