import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/Premier/Premier.component";

const HomePage=()=>{
  return(
    <>
    <div className="container px-4 m-auto">
      <h1 className="font-bold text-2xl text-gray-800 py-2">The Best of Entertainment</h1>
      <EntertainmentCardSlider/>
      <Premier/>
    </div>
    </>
  );
}

export default HomePage;
