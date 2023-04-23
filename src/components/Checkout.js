import "./Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
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

            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
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
