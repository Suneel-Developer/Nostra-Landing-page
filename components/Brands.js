import Image from "next/image";
import styles from "../styles/components.module.css";
import Adidas from "../assets/Adidas.webp";
import ChanelBrand from "../assets/chanel.webp";
import CelviBrand from "../assets/calvin-klein.webp";
import Guess from "../assets/guess.webp";
import GucciBrand from "../assets/gucci.webp";
import DGBrand from "../assets/D&G.webp";
import LevisBrand from "../assets/levis.webp";
import VersaceBrand from "../assets/Versace.webp";

const Brands = () => {
  return (
    <section className={styles.brandContainer} id="brands">
      <h1 className="font-bold lg:text-3xl  mb-10 ">Latest Brands</h1>
      <div className={styles.brands}>
        <div>
          <Image src={ChanelBrand} alt="Brands Logo" width={100} height={100} />
        </div>
        <div>
          <Image src={CelviBrand} alt="Brands Logo" width={50} height={50} />
        </div>
        <div>
          <Image src={Guess} alt="Brands Logo" width={50} height={50} />
        </div>
        <div>
          <Image src={GucciBrand} alt="Brands Logo" width={50} height={50} />
        </div>
        <div>
          <Image src={DGBrand} alt="Brands Logo" width={70} height={70} />
        </div>
        <div>
          <Image src={LevisBrand} alt="Brands Logo" width={50} height={50} />
        </div>
        <div>
          <Image src={Adidas} alt="Brands Logo" width={50} height={50} />
        </div>
        <div>
          <Image src={VersaceBrand} alt="Brands Logo" width={50} height={50} />
        </div>
      </div>
    </section>
  );
};

export default Brands;
