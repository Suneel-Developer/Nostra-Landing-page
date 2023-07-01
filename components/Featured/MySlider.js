import Card from "./Card";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const data = [
  { img: "/picks2.png", name: "Autumn Dress", price: "$58", oldprice: "$70" },
  { img: "/picks2.png", name: "Grey Shirt", price: "$62",  },
  { img: "/picks2.png", name: "Leather Coat", price: "$30", oldprice: "$70" },
  { img: "/picks2.png", name: "Autumn Dress", price: "$58", oldprice: "$70" },
  { img: "/picks2.png", name: "Grey Shirt", price: "$62",  },
  { img: "/picks2.png", name: "Leather Coat", price: "$30", oldprice: "$70" },
  { img: "/picks2.png", name: "Autumn Dress", price: "$58", oldprice: "$70" },
  { img: "/picks2.png", name: "Grey Shirt", price: "$62",  },
  { img: "/picks2.png", name: "Leather Coat", price: "$30", oldprice: "$70" },
 
];

const MySlider = () => {
  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        {data.map((el, index) => (
          <Card key={index} img={el.img} name={el.name} price={el.price} oldprice={el.oldprice} />
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
