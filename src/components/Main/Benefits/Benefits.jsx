import React from "react";
import bench from "../../../assets/images/bench.svg";
import build from "../../../assets/images/building.svg";
import fountain from "../../../assets/images/fountain.svg";
import bicycle from "../../../assets/images/bicycle.svg";

const Benefits = () => {
  return (
    <div className="bg-[#242B33]">
      <div className="container mx-auto flex justify-between gap-[70px]">
        <div className="text-center">
          <img className="mb-14" src={bench} alt="bench" />
          <p className="text-[#ffffff] text-base">
            Рядом исторические парки и скверы
          </p>
        </div>
        <div className="text-center">
          <img className="mb-14" src={build} alt="building" />
          <p className="text-[#ffffff] text-base">Полностью обустроенный</p>
        </div>
        <div className="text-center">
          <img className="mb-14" src={fountain} alt="fountain" />
          <p className="text-[#ffffff] text-base">10 фантанов на территории</p>
        </div>
        <div className="text-center">
          <img className="mb-14" src={bicycle} alt="bicycle" />
          <p className="text-[#ffffff] text-base">6 км велодорожек</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
