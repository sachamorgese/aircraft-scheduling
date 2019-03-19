import React from "react";

const RotationDetail = (props) => {
  const { onElementClick, data, data: { id, destination, origin, readable_arrival, readable_departure } } = props;
  
  return (
    <li onClick={() => onElementClick(data)} >
      <span>{ id }</span>
      <span>{ `${origin}, ${destination}` }</span>
      <span>{ `${readable_departure}, ${readable_arrival}` }</span>
    </li>
  )
};

export default RotationDetail;