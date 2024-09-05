
import React from "react";
import Invoice from "./Invoice";

const InvoiceLayout = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
      <Invoice title="Invoice 1">
        <p>Delivery (customer details)</p>
        <p>Invoice customer (customer details)</p>
        <p>Invoice calculation</p>
      </Invoice>
      
      <Invoice title="Invoice 2">
        <div>Product 1</div>
        <div>Product details</div>
      </Invoice>

      <Invoice title="Invoice 3">
        <div>Product 1</div>
        <div>Product details</div>
      </Invoice>

      <Invoice title="Invoice 4">
        <div>Product 1</div>
        <div>Product details</div>
      </Invoice>
    </div>
  );
};

export default InvoiceLayout;
