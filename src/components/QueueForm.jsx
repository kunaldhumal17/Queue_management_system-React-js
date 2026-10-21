import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

function QueueForm({ onadd }) {
  const [name, setname] = useState("");
  const [service, setservise] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !service.trim()) return;

    onadd({ name, service });
    setname("");
    setservise("");
  };

  return (
    <>
      <form className="queue-form" onSubmit={handlesubmit}>
        <h2>Add to queue</h2>
        <div className="form-group">
          <input
            placeholder="customer name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            required
          />
        </div>
        <div className="form-group">
          <select
            value={service}
            onChange={(e) => setservise(e.target.value)}
            required
          >
            <option value="">select service</option>
            <option value="consultation">consultation</option>
            <option value="payment">payment</option>
            <option value="support">support</option>
          </select>
        </div>

        <button type="submit"><FaUserPlus />Add customer</button>
      </form>
    </>
  );
}

export default QueueForm;
