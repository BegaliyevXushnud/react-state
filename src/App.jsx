
import React, { useState } from 'react';
import PeopleTable from './pages/age';
import Animals from './pages/animals';
import InvoiceLayout from './pages/voice';

const App = () => {
  const [counters, setCounters] = useState([]);

  const addCounter = () => {
    setCounters([...counters, 0]);
  };

  const increaseCount = (index) => {
    const newCounters = [...counters];
    newCounters[index] += 1;
    setCounters(newCounters);
  };

  const decreaseCount = (index) => {
    const newCounters = [...counters];
    newCounters[index] -= 1;
    setCounters(newCounters);
  };

  return (
    <div>
      <h1>Task1</h1>
     <div>
     <button onClick={addCounter}>Add Counter</button>
      {counters.map((item, index) => (
        <div key={index} className="d-flex">
          <button onClick={() => increaseCount(index)}>+</button>
          <span>{item}</span>
          <button onClick={() => decreaseCount(index)}>-</button>
        </div>
      ))}
     </div>
     <PeopleTable/>
     <Animals/>
     <h1>Task-4</h1>
     <InvoiceLayout/>
    </div>
  );
};

export default App;
