import React from "react";
import {BsFillCartPlusFill} from "react-icons/bs"

const Card = ({ img, name, price, oldprice }) => {
  return (
    <div className="w-[100%] ">
      <div>
        <img
          className="h-[300px] sm:h-[450px] w-[100%]  object-fill rounded-lg"
          src={img}
          alt="dp"
        />
        <div className="flex flex-row gap-4 justify-between items-center mt-4 ">
          <div>
            <h3 className=" font-medium text-[20px] my-[10px]">{name}</h3>
            <div className="flex items-start gap-3 mb-3">
              <span className="font-medium text-[22px]">{price} </span>
              <del className="font-medium text-[15px] ">{oldprice}</del>
            </div>
          </div>
          <div className="bg-[#1D242D] text-white text-[20px] p-3 cursor-pointer rounded-[8px]">
            <BsFillCartPlusFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
