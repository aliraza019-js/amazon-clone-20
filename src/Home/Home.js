import React from "react";
import Product from "../Products/Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__containter">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        {/* Product tage can contain its properties like "title , id , rating , price . image" */}

        <div className="home__row">
          <Product
            id={1}
            title="AmazonBasics"
            ratings={5}
            price={22.326}
            image="https://m.media-amazon.com/images/I/71p11135VSL._AC_UL320_.jpg"
            Shop_now="Add to Basket"
          />

          <Product
            id={1}
            title="Holiday deals"
            ratings={5}
            price={36.3}
            image="https://m.media-amazon.com/images/I/71n3DlokliL._AC_UL320_.jpg"
            Shop_now="Add to Basket"
          />

          <Product
            id={2}
            title="Start on your holiday list early"
            ratings={5}
            price={5.02}
            image="https://m.media-amazon.com/images/I/81MIPZVLvaL._AC_UL320_.jpg"
            Shop_now="Add to Basket"
          />

          <Product
            id={3}
            title="Personal Computer"
            ratings={5}
            price={22.326}
            image="https://m.media-amazon.com/images/I/51gzTzO5M1L._AC_UL320_.jpg"
            Shop_now="Add to Basket"
          />
        </div>

        <div className="home__row">
          <Product
            id={1}
            title="AmazonBasics Business Laptop Case - 15-Inch, Grey"
            ratings={5}
            price={12.326}
            image="https://m.media-amazon.com/images/I/A1WfHCXxB+L._AC_UL320_.jpg"
            Shop_now="Add to Basket"
          />

          <Product
            id={3}
            title="Holiday deals"
            ratings={5}
            price={52.326}
            image="https://m.media-amazon.com/images/I/91NrkmjOc1L._AC_UL320_.jpg"
            Shop_now="Add to Basket"
          />
        </div>
        <div className="home__row">
          <Product
            id={1}
            title="Samsung LED 55 Inch"
            ratings={5}
            price={22.326}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            Shop_now="Add to Basket"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
