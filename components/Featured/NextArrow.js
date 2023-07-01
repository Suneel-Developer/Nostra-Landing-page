import {BsChevronRight} from "react-icons/bs";
const NextArrow = ({onClick}) => {
  return (
    <div className=" absolute right-5 top-[-0px]" onClick={onClick}>
      <div className="bg-gray-200 h-[50px] w-[50px] rounded text-lg  grid place-items-center cursor-pointer">
        <BsChevronRight />
      </div>
    </div>
  );
};

export default NextArrow;
