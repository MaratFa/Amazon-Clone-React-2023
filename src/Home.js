import Header from "./Header";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
            alt=""
          />
          <div className="home__row">
            <Product
              id={"1"}
              title={
                "SteelSeries Arctis 5 - RGB Illuminated Gaming Headset with DTS Headphone: X v2.0 Surround - for PC and PlayStation 4 - Black"
              }
              price={61.99}
              image={
                "https://m.media-amazon.com/images/I/81Y9BnR2+hL._AC_SY606_.jpg"
              }
              rating={5}
            />

            <Product
              id={"2"}
              title={
                "Razer Ornata Chroma Gaming Keyboard: Hybrid Mechanical Key Switches - Customizable Chroma RGB Lighting - Individually Backlit Keys - Detachable Plush Wrist Rest - Programmable Macro Functionality"
              }
              price={59.99}
              image={
                "https://m.media-amazon.com/images/I/71tDhEbyPRL._AC_SL1500_.jpg"
              }
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id={"3"}
              title={"PlayStation Classic"}
              price={99.0}
              image={
                "https://m.media-amazon.com/images/I/71ogaAK8DGL._AC_SX425_.jpg"
              }
              rating={5}
            />
            <Product
              id={"4"}
              title={"Microsoft Xbox Series S Console - 512GB (Renewed)"}
              price={264.99}
              image={
                "https://m.media-amazon.com/images/I/61Vv5FeZH2L._SL1200_.jpg"
              }
              rating={5}
            />
            <Product
              id={"5"}
              title={
                "enovo - 2022 - IdeaPad Gaming 3 - Essential Gaming Laptop Computer - 15.6"
              }
              price={769.0}
              image={
                "https://m.media-amazon.com/images/I/81zcUyiNcUL._AC_SL1500_.jpg"
              }
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id={"6"}
              title={"Resident Evil 4 - PS5"}
              price={59.99}
              image={
                "https://m.media-amazon.com/images/I/712XPl7+qKL._AC_SL1500_.jpg"
              }
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
