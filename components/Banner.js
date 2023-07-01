import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import BannerImg from "../assets/bannerImg.webp";
import styles from "../styles/components.module.css";
const Banner = () => {
  return (
    <div className="px-[7%] my-[6rem]">
      <div className={styles.banner}>
        <div className={styles.Image}>
          <Image src={BannerImg} alt="Banner Image" className=" object-fill" />
        </div>
        <div className="flex items-start flex-col justify-center p-8 gap-4">
          <span className="text-[#eee]">LIMITED OFFER</span>
          <h1 className="text-[#eee] 2xl:text-[46px] xl:text-[30px] text-[30px]  font-semibold mt-3">
            35% off only this friday and get special gift
          </h1>

          <button className="flex items-center gap-3 bg-white rounded p-3 text-sm mt-3 hover:bg-slate-300 font-semibold">
            Grab it now <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
