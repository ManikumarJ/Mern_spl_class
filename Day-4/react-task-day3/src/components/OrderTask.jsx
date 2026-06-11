// Bonus Company-Level Task 
// const orders = [ { id: 1, customer: "John", amount: 5000, status: "Completed" },
//      { id: 2, customer: "David", amount: 3000, status: "Pending" }, 
//      { id: 3, customer: "Sam", amount: 7000, status: "Completed" }, 
//      { id: 4, customer: "Peter", amount: 2000, status: "Pending" } 
// ]; 
// Tasks: Display all orders (map)
//  Display completed orders (filter) 
// Find order id = 3 (find) 
// Calculate total revenue (reduce)


import React from "react";

export const OrderTask = () => {
  const orders = [
    { id: 1, customer: "John", amount: 5000, status: "Completed" },
    { id: 2, customer: "David", amount: 3000, status: "Pending" },
    { id: 3, customer: "Sam", amount: 7000, status: "Completed" },
    { id: 4, customer: "Peter", amount: 2000, status: "Pending" }
  ];

  const completedOrders = orders.filter(
    (order) => order.status === "Completed"
  );

  const orderById = orders.find((order) => order.id === 3);

  const totalRevenue = orders.reduce((acc, order) => acc + order.amount, 0);

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.customer}</td>
              <td>{order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Completed Orders Count: {completedOrders.length}</h3>

      <h3>
        Order ID 3: {orderById.customer} - {orderById.amount}
      </h3>

      <h3>Total Revenue: {totalRevenue}</h3>
    </>
  );
};