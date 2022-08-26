import React from "react";
import ExploreProperty from "./ExploreProperty";
import HomeBanner from "./HomeBanner";
import HomeVideo from "./HomeVideo";
import SafeMovers from "./SafeMovers";
import SecureCourier from "./SecureCourier";

const Home = () => {
  return (
    <div className="mt-[-5rem]">
      <HomeBanner />
      <SafeMovers />
      <ExploreProperty />
      <SecureCourier />
      <HomeVideo/>
    </div>
  );
};

export default Home;
