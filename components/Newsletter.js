import styles from "../styles/components.module.css";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

const Newsletter = () => {
  return (
    <div className={styles.newsletterContainer}>
      <h1 className="text-center lg:max-w-[50%] max-w-[100%] font-bold lg:text-3xl text-2xl mb-10 leading-10">
        Subscribe to our newsletter to get updates to our latest collection
      </h1>
      <p className="text-[17px] font-medium opacity-70 mb-5 text-center">
        Get 20% off on your first order just by subscribing to our newsletter
      </p>
      <div className="flex items-center gap-3 mb-5  ">
        <div className="flex items-center  bg-[#eee] p-3 rounded gap-4 w-[100%] sm:w-[300px] ">
          <MdOutlineEmail className="text-[25px]" />
          <input
            className=" w-[100%]"
            type="text"
            placeholder="Type your Email"
          />
        </div>
        <button className="bg-black text-white rounded p-3 text-sm hover:bg-slate-300 hover:text-black font-semibold">
          Subscribe
        </button>
      </div>
      <p className="opacity-70 text-center">
        You will be able to unsubscribe at any time
      </p>
      <p className="opacity-70 text-center">
        Read our Privacy Policy{" "}
        <Link className="underline text-blue-800 opacity-100" href="#">
          Here
        </Link>
      </p>
    </div>
  );
};

export default Newsletter;
