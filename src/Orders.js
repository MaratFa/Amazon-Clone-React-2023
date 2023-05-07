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


function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
if(user?.uid) {
const ordersRef = collection(db, "users", user.uid, orders);
const q = query(ordersRef, orderBy('created', 'desc'));
onSnapshot(q, (querySnapshot) => {
// TODO: check if docs exist etc.
 setOrders(querySnapshot.docs.map(doc => ({
                        id:doc.id,
                        data:doc.data()
                    })))
});
}
  }, [user]);

...................................

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot(snapshot =>
          setOrders(
            snapshot.docs.docs.map(doc => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  */
