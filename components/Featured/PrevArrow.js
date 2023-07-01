import { BsChevronLeft } from "react-icons/bs";
const PrevArrow = ({onClick}) => {
  return (
    <div className=" relative" onClick={onClick}>
      <div className=" bg-gray-200  h-[50px] w-[50px] mb-3 rounded text-lg grid place-items-center cursor-pointer">
        <BsChevronLeft />
      </div>
    </div>
  );
};

export default PrevArrow;
