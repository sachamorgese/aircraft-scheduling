import React from 'react';

const timeSort = (a, b) => a.start - b.start;

const makeOrderedDiv = rotation => {
  const { freeTime, scheduledTime } = rotation;
  if (!freeTime) {
    return [];
  }
  return [...freeTime, ...scheduledTime].sort(timeSort);
};

const RotationBar = ({ rotation }) => {
  const rotationList = makeOrderedDiv(rotation);
  console.log(rotationList);
  return (
    <>
      <div className="RotationBarText">
        <span>00:00</span>
        <span>12:00</span>
      </div>
      <div className="RotationBar">
        {rotationList &&
          rotationList.map((elem, i) => (
            <div
              key={i}
              className={elem.type}
              style={{ width: `${elem.percentage}%` }}
            />
          ))}
      </div>
    </>
  );
};

export default RotationBar;
