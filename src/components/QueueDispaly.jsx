import React from "react";

function QueueDispaly({ queue, onUpdateStatus, onRemove }) {
  const getstatuscolor = (status) => {
    switch (status) {
      case "waiting":
        return "var(--warning)";
      case "serving":
        return "var(--success)";
      case "completed":
        return "var(--info)";
      default:
        return "var(--text)";
    }
  };

  return (
    <div className="queue-display">
      <h2> current queue </h2>

      {queue.length === 0 ? (
        <p className="empty-queue"> no customer data</p>
      ) : (
        <div className="queue-list">
          {queue.map((customer) => (
            <div className="queue-item" key={customer.id}>
              <div className="customer-info">
                <h3>{customer?.name}</h3>
                <p>{customer.service}</p>

                <span
                  className="status"
                  style={{ color: getstatuscolor(customer.status) }}
                >
                  {customer.status}
                </span>
              </div>

              <div className="actions">
                {customer.status === "waiting" && (
                  <button
                    type="button"
                    className="serve-btn"
                    onClick={() => onUpdateStatus(customer.id, "serving")}
                  >
                    serve
                  </button>
                )}

                {customer.status === "serving" && (
                  <button
                    type="button"
                    className="complete-btn"
                    onClick={() => onUpdateStatus(customer.id, "completed")}
                  >
                    complete
                  </button>
                )}

                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => onRemove(customer.id)}
                >
                  remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QueueDispaly;
