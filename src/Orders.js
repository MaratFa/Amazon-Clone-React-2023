import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Header from "./Header.js";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const ref = collection(db, "users", "orders", user?.uid);
      const orderedOrders = query(ref, orderBy("created", "desc"));
      onSnapshot(orderedOrders, snapshot => {
        setOrders(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setOrders([]);
    }
  }, [user]);
  debugger;
  return (
    <div>
      <Header />
      <div className="orders">
        <h1>Your Orders</h1>
        <div className="orders__order">
          {orders?.map(order => (
            <Order order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
