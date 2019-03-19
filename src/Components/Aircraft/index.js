import React from "react";

const Aircraft = (props) => {
  const { onElementClick, data, usage } = props;
  
  return (
    <li onClick={onElementClick}>
      <span>{ data.ident }</span>
      {/* Create an object that includes the usability by */}
      <span>{ `${usage ? usage : 0}%` }</span>
    </li>
  )
}

export default Aircraft;