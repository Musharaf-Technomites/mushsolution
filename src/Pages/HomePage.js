import React from "react";
import MyNavBar from "../Components/MyNavBar";
import HomeMainSlider from "../Components/HomeMainSlider";
import HomeServicesTab from "../Components/HomeServicesTab";
const HomePage = () => {
  return (
    <div>
      <div>
        <HomeMainSlider />
      </div>
      <div>
        <MyNavBar />
      </div>
      <div>
        <HomeServicesTab />
      </div>
    </div>
  );
};

export default HomePage;
