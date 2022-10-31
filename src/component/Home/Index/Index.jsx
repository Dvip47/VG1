import React from "react";
import BestSeller from "../BestSeller";
import Bed from "../../Bed/Bed";
import Sofa from "../../sofa/Sofa";
import Door from "../../Door/Door";
import Chair from "../../Chair/Chair";

function Index() {
  return (
    <div>
      <BestSeller />
      <Chair />
      <Bed />
      <Sofa />
      <Door />
    </div>
  );
}

export default Index;
