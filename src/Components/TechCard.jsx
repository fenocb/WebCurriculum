import React from "react";

const TechCard = ({ imgSrc, TechName }) => {
  return (
    <div className="relative w-60">
      <img
        src={imgSrc}
        alt=""
        className="scale-[.4] saturate-0 transition ease-in-out duration-500  hover:saturate-100 hover:scale-[.6]  "
      />
      {/* <p className="text-Cian ">{TechName}</p> */}
    </div>
  );
};
export default TechCard;
