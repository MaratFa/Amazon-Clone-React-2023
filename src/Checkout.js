import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div>
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/MothersDay/Fuji_LP_header_MD21_en_US.png"
            alt=""
          />
          <div>
            <h2 className="checkout__title">Your shopping basket</h2>

            <CheckoutProduct
              id="335432"
              title="This is a test"
              image="https://m.media-amazon.com/images/I/81Y9BnR2+hL._AC_SY606_.jpg"
              price={133.44}
              rating={5}
            />

            <CheckoutProduct
              id="335432"
              title="This is a test"
              image="https://m.media-amazon.com/images/I/81Y9BnR2+hL._AC_SY606_.jpg"
              price={133.44}
              rating={5}
            />

            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
            {/* CheckoutProduct */}
            {/* CheckoutProduct */}
            {/* CheckoutProduct */}
            {/* CheckoutProduct */}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
