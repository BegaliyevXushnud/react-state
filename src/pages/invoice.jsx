
import React from "react";

const Invoice = ({ title, children }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "5px" }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Invoice;
