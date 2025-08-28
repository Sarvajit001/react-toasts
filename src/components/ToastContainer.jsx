import React, { useState } from "react";
import "../toaststyle.css";

let toastId = 0; // simple unique ID generator

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = (type, message) => {
    const id = toastId++;
    const newToast = { id, type, message };

    setToasts((prev) => [...prev, newToast]);

    // auto remove after 3s
    setTimeout(() => {
      removeToast(id);
    }, 7000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <>
    <div className="button-box">
    <h1>React Toasts</h1>
      <div className="container">
        <div className="btn-container">
          <button
            className="btn btn-success"
            onClick={() =>
              showToast("success", "✅ Success! Operation completed.")
            }
          >
            success toast
          </button>
          <button
            className="btn btn-info"
            onClick={() =>
              showToast("info", "ℹ️ FYI: Here’s some information.")
            }
          >
            info toast
          </button>
          <button
            className="btn btn-warning"
            onClick={() =>
              showToast("warning", "⚠️ Warning! Something looks odd.")
            }
          >
            warning toast
          </button>
          <button
            className="btn btn-danger"
            onClick={() =>
              showToast("error", "❌ Error! Something went wrong.")
            }
          >
            error toast
          </button>
        </div>
     </div>

        {/* Render all active toasts */}
        <div className="toast-container">
          {toasts.map((toast) => (
            <div key={toast.id} className={`toast ${toast.type}`}>
              {toast.message}
              <span onClick={() => removeToast(toast.id)}>&times;</span>
            </div>
          ))}
        </div>
      </div>
    
    </>
  );
};

export default ToastContainer;
