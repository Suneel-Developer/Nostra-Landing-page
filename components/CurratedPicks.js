import Image from "next/image";
import styles from "../styles/components.module.css";
import Picks1 from "../assets/picks1.webp";
import Picks2 from "../assets/picks2.webp";
import Picks3 from "../assets/picks3.webp";
import Picks4 from "../assets/picks4.webp";
import { BsArrowRight } from "react-icons/bs";

const CurratedPicks = () => {
  return (
    <div className="my-[3rem] px-[7%]" id="mostWantedProduct">
      <h1 className="font-bold lg:text-3xl mb-10">Currated Picks</h1>
      <div className={styles.curratedContainer}>
        <div className=" relative">
          <div className={styles.picksImage}>
            <Image src={Picks1} alt="Arrivles Propduct" />
          </div>
          <div className="absolute bottom-4 right-0 w-[100%] flex items-center justify-center">
            <button className="flex w-[80%]  items-center justify-between  bg-white rounded p-3 text-lg mt-3 hover:bg-slate-300 font-semibold">
              Best Seller <BsArrowRight />
            </button>
          </div>
        </div>
        <div className=" relative">
          <div className={styles.picksImage}>
            <Image src={Picks2} alt="Arrivles Propduct" />
          </div>
          <div className="absolute bottom-4 right-0 w-[100%] flex items-center justify-center">
            <button className="flex w-[80%]  items-center justify-between  bg-white rounded p-3 text-lg mt-3 hover:bg-slate-300 font-semibold">
              Shop Men
              <BsArrowRight />
            </button>
          </div>
        </div>
        <div className=" relative">
          <div className={styles.picksImage}>
            <Image src={Picks3} alt="Arrivles Propduct" />
          </div>
          <div className="absolute bottom-4 right-0 w-[100%] flex items-center justify-center">
            <button className="flex w-[80%]  items-center justify-between  bg-white rounded p-3 text-lg mt-3 hover:bg-slate-300 font-semibold">
              Shop Women <BsArrowRight />
            </button>
          </div>
        </div>
        <div className=" relative">
          <div className={styles.picksImage}>
            <Image src={Picks4} alt="Arrivles Propduct" />
          </div>
          <div className="absolute bottom-4 right-0 w-[100%] flex items-center justify-center">
            <button className="flex w-[80%]  items-center justify-between  bg-white rounded p-3 text-lg mt-3 hover:bg-slate-300 font-semibold">
              Shop Casual <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurratedPicks;
