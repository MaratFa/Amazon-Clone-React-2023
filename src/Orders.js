import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Order from "./Order.js";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]); //Initial value will be empty array

  useEffect(() => {
    if (user) {
      async function fetchData() {
        // You can await here
        const ordersRef = collection(db, "users", user?.uid, "orders");
        const q = query(ordersRef, orderBy("created", "desc"));
        const querySnapshot = await getDocs(q);
        setOrders(
          querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      }
      fetchData();
    } else {
      setOrders([]);
    }
  }, []); //You have to have [] here. This makes it run only once.

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map(order => {
          <Order order={order} />;
        })}
      </div>
    </div>
  );
}

export default Orders;
