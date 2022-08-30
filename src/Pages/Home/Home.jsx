import React from "react";
import ExploreProperty from "./ExploreProperty";
import HomeBanner from "./HomeBanner";
import HomeService from "./HomeService";
import HomeSubscribe from "./HomeSubscribe";
import MostProduct from "./MostProduct";
import SafeMovers from "./SafeMovers";
import SecureCourier from "./SecureCourier";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <SafeMovers />
      <ExploreProperty />
      <SecureCourier />
      <HomeService />
      <MostProduct />
      <HomeSubscribe />
    </div>
  );
};

export default Home;
