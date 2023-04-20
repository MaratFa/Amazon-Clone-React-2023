import "./Product.css"

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>HyperX Cloud II</p>
        <p className="product_price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product_rating">
          <p>&#11088;</p>
        </div>
      </div>
      <img 
        src='https://m.media-amazon.com/images/I/71M5l+O4OFL._AC_SY355_.jpg'
        alt=""
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
