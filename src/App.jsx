import React, { useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueDispaly from "./components/QueueDispaly";
import "./App.css";

function App() {
  const [queue, setqueue] = useState([]);

  const addtoqueue = (customer) => {
    setqueue((currentQueue) => [
      ...currentQueue,
      { ...customer, id: Date.now(), status: "waiting" },
    ]);
  };

  const updatestatus = (id, newstatus) => {
    setqueue((currentQueue) =>
      currentQueue.map((customer) =>
        customer.id === id ? { ...customer, status: newstatus } : customer,
      ),
    );
  };

  const removefromqueue = (id) => {
    setqueue((currentQueue) =>
      currentQueue.filter((customer) => customer.id !== id),
    );
  };

  return (
    <div className="app">
      <header>
        <h1>Queue managemanet system</h1>
        <p>manage your customer efficiently</p>
      </header>

      <main>
        <QueueForm onadd={addtoqueue} />
        <QueueDispaly
          queue={queue}
          onUpdateStatus={updatestatus}
          onRemove={removefromqueue}
        />
      </main>
    </div>
  );
}

export default App;
