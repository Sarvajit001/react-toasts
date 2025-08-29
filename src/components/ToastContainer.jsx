import React, { useState } from "react";
import "../toaststyle.css";

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  // array of toast types & messages
  const toastOptions = [
    { type: "success", message: "✅ Success! Operation completed." },
    { type: "info", message: "ℹ️ FYI: Here’s some information." },
    { type: "warning", message: "⚠️ Warning! Something looks odd." },
    { type: "error", message: "❌ Error! Something went wrong." }
  ];

  const showToast = (type, message) => {
    const id = Date.now(); // unique ID based on timestamp
    console.log(Date.now());

    const newToast = { id, type, message };

    setToasts((prev) => [...prev, newToast]);

    // auto remove after 7s
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
            {toastOptions.map((toastObj) => (
              <button
                key={toastObj.type}
                className={`btn btn-${toastObj.type}`}
                onClick={() => showToast(toastObj.type, toastObj.message)}
              >
                {toastObj.type} toast
              </button>
            ))}
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
