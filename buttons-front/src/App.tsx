import {Counter} from "./Counter";
import { useState, useEffect } from "react";
import "./App.css";
import { fetchButtons, addCounter, updateCounter, deleteCounter, type Counter as CounterType } from './api/api';


function App() {
  const [counters, setCounters] = useState<CounterType[]>([]);

  useEffect(() => {
    fetchButtonsData();
  }, []);

  const fetchButtonsData = async () => {
    try {
      const data = await fetchButtons();
      setCounters(data);
    } catch (error) {
      console.error('Error fetching buttons:', error);
      setCounters([]);
    }
  };

  const onAddCounter = async () => {
    try {
      const data = await addCounter();
      setCounters((prevCounters) => [...prevCounters, data]);
    } catch (error) {
      console.error('Error adding a counter:', error);
    }
  }

  const onIncrement = async (buttonId: number) => {
    try {
      const data = await updateCounter(buttonId);
      setCounters((prevCounters) => prevCounters.map((counter) => {
        if (counter.id === buttonId) {
          return data;
        } else {
          return counter;
        }
      }));
    } catch (error) {
      console.error('Error updating the counter:', error);
    }
  }

  const onDelete = async (buttonId: number) => {
    try {
      const counter = await deleteCounter(buttonId);
      const deleteCounterIndex = counters.findIndex((x) => x.id === counter.id);
      const newCounters = [...counters];
      newCounters.splice(deleteCounterIndex, 1);
      setCounters(newCounters);
    } catch (error) {
      console.error('Error deleting the counter:', error);
    }
  }

  return (
    <>
      <button className="addButton" onClick={onAddCounter}>
        Agregar Botón
      </button>
      <div className="counters">
        {counters.length > 0 ? (
          counters.map((button) => (
            <div key={button.id} className="counter">
              <Counter
                id={button.id}
                name={`Botón: ${button.id} - Clicks: ${button.count}`}
                key={button.id}
                onIncrement={onIncrement}
                onDelete={onDelete}
              />
            </div>
          ))
        ) : (
          <p>No hay botones</p>
        )}
      </div>
    </>
  );
}

export default App;
