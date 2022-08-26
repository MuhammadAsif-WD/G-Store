import React from "react";
import ExploreProperty from "./ExploreProperty";
import HomeBanner from "./HomeBanner";
import SafeMovers from "./SafeMovers";
import SecureCourier from "./SecureCourier";

const Home = () => {
  return (
    <div className="mt-[-5rem]">
      <HomeBanner />
      <SafeMovers />
      <ExploreProperty />
      <SecureCourier />
    </div>
  );
};

export default Home;
