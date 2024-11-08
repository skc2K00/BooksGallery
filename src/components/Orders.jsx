import React from 'react';

const Orders = ({ pastOrders }) => {
  return (
    <div className="orders">
      <h2>Your Past Orders</h2>
      {pastOrders.length === 0 ? (
        <p>You haven't placed any orders yet.</p>
      ) : (
        <ul>
          {pastOrders.map((order, index) => (
            <li key={index} className="order-item">
              <h3>Order #{index + 1}</h3>
              <p>Date: {order.orderDate}</p>
              <h4>Items:</h4>
              <ul>
                {order.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item.title}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
