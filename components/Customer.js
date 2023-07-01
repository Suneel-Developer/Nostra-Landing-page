import styles from "../styles/components.module.css";
import { TbTruckDelivery } from "react-icons/tb";

const Customer = () => {
  return (
    <div className="my-[4rem] px-[7%] py-3 ">
      <div className=" block justify-between lg:flex items-center align-bottom ">
        <h1 className="font-bold lg:text-3xl mb-2 lg:mb-10 max-w-[100%] xl:max-w-[30%] items-center ">
          We Provide best Customer experiences
        </h1>
        <p className=" border-l-0 lg:border-l-4 border-black opacity-50 h-auto lg:h-[70px] flex items-center p-0 lg:p-3">We Insure our Customers have the best shipping experience</p>
      </div>
      <div className={styles.customerContainer}>
        <div>
          <div className=" bg-gray-200 w-[60px] h-[60px] rounded-lg flex items-center justify-center mb-5 ">
            <TbTruckDelivery className=" text-[30px]" />
          </div>
          <h2 className=" font-semibold text-[20px] mb-2">Original Products</h2>
          <p className=" opacity-70 text-sm">
            We Provide money back guarantee if the product are not original
          </p>
        </div>
        <div>
          <div className=" bg-gray-200 w-[60px] h-[60px] rounded-lg flex items-center justify-center mb-5 ">
            <TbTruckDelivery className=" text-[30px]" />
          </div>
          <h2 className=" font-semibold text-[20px] mb-2">Original Products</h2>
          <p className=" opacity-70 text-sm">
            We Provide money back guarantee if the product are not original
          </p>
        </div>
        <div>
          <div className=" bg-gray-200 w-[60px] h-[60px] rounded-lg flex items-center justify-center mb-5 ">
            <TbTruckDelivery className=" text-[30px]" />
          </div>
          <h2 className=" font-semibold text-[20px] mb-2">Original Products</h2>
          <p className=" opacity-70 text-sm">
            We Provide money back guarantee if the product are not original
          </p>
        </div>
        <div>
          <div className=" bg-gray-200 w-[60px] h-[60px] rounded-lg flex items-center justify-center mb-5 ">
            <TbTruckDelivery className=" text-[30px]" />
          </div>
          <h2 className=" font-semibold text-[20px] mb-2">Original Products</h2>
          <p className=" opacity-70 text-sm">
            We Provide money back guarantee if the product are not original
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customer;
