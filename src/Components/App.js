import React, { useState, useEffect } from 'react';
import './App.css';
import AircraftsList from './AircraftsList';
import FlightsList from './FlightsList';
import RotationColumn from './RotationColumn'
import Calendar from './Calendar';

const App = () => {
  const [aircrafts, setAircrafts] = useState([]);
  const [flights, setFlights] = useState([]);
  const [rotations, setRotations] = useState({});
  const [selectedAircraft, setSelectedAircraft] = useState('');
  
  const fetchData = async (value, callback) => {
    const res = await fetch(`https://infinite-dawn-93085.herokuapp.com/${value}`);
    const { data } = await res.json();
    console.log(data);
    callback(data);
  };
  
  useEffect(() => {
      fetchData('aircrafts', setAircrafts)
    }, []
  );
  
  const onAircraftClick = aircraft => {
    // In a real case scenario this would accept a value to fetch data based on the aircraft
    fetchData('flights', setFlights);
    setSelectedAircraft(aircraft);
  };
  
  const onFlightClick = target => {
    const newAircraftRotation = rotations[selectedAircraft] ?
      [...rotations[selectedAircraft], target] :
      [target];
    const newRotation = {
      ...rotations,
      [selectedAircraft]: newAircraftRotation,
    };
    setRotations(newRotation);
  };
  
  const onRotationClick = target => {
    const newAircraftRotation = rotations[selectedAircraft].filter(rotation => rotation !== target);
    const newRotation = {
      ...rotations,
      [selectedAircraft]: newAircraftRotation,
    };
    setRotations(newRotation);
  };
  
  const formatFlights = () => {
    if (!rotations[selectedAircraft]) {
      return flights;
    }
    return flights.filter(flight => !rotations[selectedAircraft].includes(flight));
  };
  
  return (
    <div className="App">
      <Calendar/>
      <AircraftsList className="sideListLeft" list={aircrafts} onElementClick={onAircraftClick} usage={{}} />
      <RotationColumn list={rotations[selectedAircraft] || []} onElementClick={onRotationClick} />
      <FlightsList className="sideListRight" list={formatFlights()} onElementClick={onFlightClick} />
    </div>
  );
};

export default App;
