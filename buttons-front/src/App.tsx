import Counter from "./Counter";
import { useState, useEffect } from "react";
import "./App.css";

const endpoints = {
  BUTTON_API: `${import.meta.env.VITE_API_URL}/button`,
} as const;

type counter = {
  id: number;
  count: number;
};

type putButtonResponse = commonResponse & {
  result: counter;
};

type commonResponse = {
  error: string;
  statusCode: number;
  sucess: boolean;
};

type getButtonResponse = commonResponse & {
  result: counter[];
};

type deleteButtonResponse = putButtonResponse;
type addButtonResponse = putButtonResponse;

function App() {
  const [counters, setCounters] = useState<counter[]>([]);

  const fetchButtons = () => {
    fetch(endpoints.BUTTON_API)
      .then((response) => response.json())
      .then((data: getButtonResponse) => {
        if (data.statusCode === 200) {
          setCounters(data.result);
        }
      })
      .catch((error) => {
        console.log("Hubo un error al obtener los botones:", error);
        setCounters([]);
      });
  };

  useEffect(() => {
    fetchButtons();
  }, []);

  const onAddCounter = () => {
    fetch(endpoints.BUTTON_API, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data: addButtonResponse) => {
        if (data.statusCode === 200) {
          setCounters([...counters, data.result]);
        }
      })
      .catch((error) => {
        console.error("Hubo un error al incrementar el conteo:", error);
      });
  };

  const onIncrement = (buttonId: number) => {
    fetch(`${endpoints.BUTTON_API}/${buttonId}`, {
      method: "PUT",
    })
      .then((response) => response.json())
      .then((data: putButtonResponse) => {
        if (data.statusCode === 200) {
          updateCounters(data.result);
        }
      })
      .catch((error) => {
        console.error("Hubo un error al incrementar el conteo:", error);
      });
  };

  const updateCounters = (counter: counter) => {
    const newCounter = counters.map((item) =>
      item.id === counter.id ? counter : item
    );
    setCounters(newCounter);
  };

  const deleteCounters = (counter: counter) => {
    const deleteCounter = counters.findIndex((x) => x.id === counter.id);
    const newCounters = [...counters];
    newCounters.splice(deleteCounter, 1);
    setCounters(newCounters);
  };

  const onDelete = (buttonId: number) => {
    fetch(`${endpoints.BUTTON_API}/${buttonId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data: deleteButtonResponse) => {
        if (data.statusCode === 200) {
          deleteCounters(data.result);
        }
      })
      .catch((error) => {
        console.error("Hubo un error al incrementar el conteo:", error);
      });
  };

  return (
    <>
      <button className="addButton" onClick={onAddCounter}>
        Agregar
      </button>
      <div className="main">
        {counters.length > 0 ? (
          counters.map((button) => (
            <div className="counter">
              <Counter
                id={button.id}
                count={button.count}
                name={`Botón: ${button.id}`}
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
