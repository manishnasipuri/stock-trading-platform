import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getToken } from "../utils/auth";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/allOrders`, {
          headers: { Authorization: `Bearer ${getToken()}` },
        });
        if (!cancelled) setOrders(res.data);
      } catch (err) {
        console.warn("Could not fetch /allOrders:", err.message);
      } finally {
        if (!cancelled) setLoaded(true);
      }
    };
    fetchOrders();
    return () => { cancelled = true; };
  }, []);

  if (loaded && orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">Get started</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.name}</td>
              <td>{order.qty}</td>
              <td>{order.price.toFixed(2)}</td>
              <td className={order.mode === "BUY" ? "profit" : "loss"}>
                {order.mode}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Orders;