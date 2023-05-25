import React, {useState} from 'react';
import Counter from './components/Counter'

import './App.css';

function App() {
  const [counters, setCounter] = useState([{
    id:Date.now() * Math.random(),
    value: 1,
    buttons:[1,2,3]
  },
    {
      id:Date.now() * Math.random(),
      value: 1,
      buttons:[1,2,3]
    },
    {
      id:Date.now() * Math.random(),
      value: 1,
      buttons:[1,2,3]
    }
  ])

  const plus = (id:number, buttonValue: number) => {
const newCounters = counters.map(counter => counter.id === id ? {...counter, value: counter.value + buttonValue }: counter)
    setCounter(newCounters)
  }

  return (
    <div className="App">
      {counters.map(counter =>
      <Counter key={counter.id} counter={counter}
      plus={plus}/>
      )}
    </div>
  );
}

export default App;
