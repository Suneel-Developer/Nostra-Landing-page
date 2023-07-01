import Link from "next/link";
import styles from "../styles/components.module.css";
import MasterCardLogo from "../assets/mastercard.webp";
import VisaLogo from "../assets/visa.webp";
import PaypalLogo from "../assets/paypal.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCol}>
        <div className="col">
          <h1 className="font-semibold text-3xl mb-3">Nostra</h1>
          <div className="subscribeInput">
            <p className="sm:max-w-[70%] max-w-[100%] opacity-70">
              Specializes in providing high-quality, stylish product for your
              wardrobe
            </p>
          </div>
        </div>
        <div className="col">
          <ul className="mt-4 sm:mt-0">
            <li className="text-md mb-2 uppercase font-semibold">Shop</li>
            <li className="leading-7 ">
              <Link href="">All Collection</Link>
            </li>
            <li className="leading-7">
              <Link href="">Winter Edition</Link>
            </li>
            <li className="leading-7">
              <Link href="">Discount</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul className="mt-4 sm:mt-0">
            <li className="text-lg mb-2 uppercase font-semibold">Company</li>
            <li className="leading-7">
              <Link href="">About Us</Link>
            </li>
            <li className="leading-7">
              <Link href="">Contact</Link>
            </li>
            <li className="leading-7">
              <Link href="">Affiliates</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul className="mt-4 sm:mt-0">
            <li className="text-lg mb-2 uppercase font-semibold">Support</li>
            <li className="leading-7">
              <Link href="">FAQs</Link>
            </li>
            <li className="leading-7">
              <Link href="">Cookie Policy</Link>
            </li>
            <li className="leading-7">
              <Link href="">Terms of Use</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul className="mt-4 sm:mt-0">
            <li className="text-lg  mb-2 uppercase font-semibold">
              Payment Methods
            </li>
            <div className="flex items-center">
              <li className="leading-7">
                <Link href="">
                  <Image src={PaypalLogo} alt="Paypal Logo" width={80} height={80} />
                </Link>
              </li>
              <li className="leading-7">
                <Link href="">
                  <Image src={MasterCardLogo} alt="MasterCard Logo" width={50} height={50} />
                </Link>
              </li>
              <li className="leading-7">
                <Link href="">
                  <Image src={VisaLogo} alt="VisaLogo" width={50} height={50} />
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div>
        <hr className="border-1 border-slate-500" />
        <p className="text-center mt-4">
          Copyright&copy; 2023 Nostra. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
