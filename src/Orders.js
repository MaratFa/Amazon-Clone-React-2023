import { useState } from "react";
import Order from "./Order.js";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map(order => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;

/*   



I think your question is regarding this part?

db
  .collection('users')
  .doc(user?.uid)
  .collection('orders')
  .orderBy('created', 'desc')
  .onSnapshot(snapshot => (
    setOrders(snapshot.docs.map(doc => ({
      id:doc.id,
      data:doc.data()
    })))
  ))

There is an onSnapshot() method, please check documentation for orderBy and onSnapshot. Code should be something like this:

if(user?.uid) {
  const ordersRef = collection(db, "users", user.uid, orders);
  const q = query(ordersRef, orderBy('created', 'desc'));
  onSnapshot(q, (querySnapshot) => {
  setOrders(querySnapshot.docs.map(doc => ({
    id:doc.id,
    data:doc.data()
  })))
});
}


  */
