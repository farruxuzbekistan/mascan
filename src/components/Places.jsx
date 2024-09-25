import React from "react";
import { AiFillStar } from "react-icons/ai";

// Reusable PlaceCard component
const PlaceCard = ({ image, title, price, description, duration, rating }) => {
  return (
    <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
      <img
        className="w-full h-1/2 object-cover rounded-t-lg"
        src={image}
        alt={title}
      />
      <div className="p-4 space-y-4">
        <div className="flex justify-between">
          <p className="text-sm text-red-400">{title}</p>
          <p className="font-bold">{price}</p>
        </div>
        <p className="font-semibold">{description}</p>
        <div className="flex justify-between items-center">
          <h2>{duration}</h2>
          <p className="flex items-center space-x-2 text-orange-400">
            <AiFillStar />
            <span>{rating}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Places = () => {
  const placesData = [
    {
      image: "images/image-8.jpg",
      title: "Тур по пустыне",
      price: "$500",
      description:
        "Откройте для себя невероятные пейзажи пустыни и древние поселения.",
      duration: "15 дней тура",
      rating: "4.8",
    },
    {
      image: "images/image-3.jpg",
      title: "Городской тур",
      price: "$500",
      description:
        "Исследуйте великолепные достопримечательности города с гидом.",
      duration: "15 дней тура",
      rating: "4.8",
    },
    {
      image: "images/image-2.jpg",
      title: "Пустынные приключения",
      price: "$500",
      description: "Получите незабываемые впечатления от поездки по пустыне.",
      duration: "15 дней тура",
      rating: "4.8",
    },
    {
      image: "images/image-7.jpg",
      title: "Доха и окрестности",
      price: "$500",
      description:
        "Узнайте больше о современном Дохе и его культурных достопримечательностях.",
      duration: "15 дней тура",
      rating: "4.8",
    },
    {
      image: "images/image-8.jpg",
      title: "Приключения на побережье",
      price: "$600",
      description:
        "Отправляйтесь в захватывающее приключение вдоль побережья с посещением красивейших пляжей.",
      duration: "10 дней тура",
      rating: "4.9",
    },
    {
      image: "images/image-3.jpg",
      title: "Исследование культурных памятников",
      price: "$550",
      description:
        "Посетите исторические памятники и познакомьтесь с культурой Катара.",
      duration: "12 дней тура",
      rating: "4.7",
    },
    {
      image: "images/image-2.jpg",
      title: "Ночные приключения в пустыне",
      price: "$650",
      description:
        "Погрузитесь в атмосферу ночной пустыни с невероятными видами звездного неба.",
      duration: "7 дней тура",
      rating: "4.9",
    },
    {
      image: "images/image-7.jpg",
      title: "Культурный тур по Дохе",
      price: "$500",
      description:
        "Исследуйте уникальные музеи и архитектуру Дохи в рамках культурного тура.",
      duration: "5 дней тура",
      rating: "4.8",
    },
  ];

  return (
    <div className="w-4/5 m-auto cursor-default">
      <div className="w-full xl:w-1/2 m-auto text-center my-10 space-y-5">
        <h1 className="text-4xl font-bold">Места, которые нельзя пропустить</h1>
        <p>
          Узнайте о лучших достопримечательностях, которые стоит посетить в
          следующем путешествии. Насладитесь культурой, природой и историей.
        </p>
      </div>

      <div className="inline md:grid grid-rows-3 lg:grid-rows-2 grid-flow-col gap-4 w-full lg:h-[450px] pb-10 border-b space-y-6 md:space-y-0">
        {/* Hardcoded example images for the first section */}
        <img
          className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200 row-span-1 col-span-2"
          src="images/image-2.jpg"
          alt="Desert View"
        />
        <img
          className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200 lg:row-span-1 lg:col-span-1 md:col-span-2"
          src="images/image-3.jpg"
          alt="City View"
        />
        <img
          className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200 lg:row-span-1 lg:col-span-1 md:col-span-2"
          src="images/desert.jpg"
          alt="Desert Landscape"
        />
        <img
          className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200 lg:row-span-2 lg:col-span-1 md:col-span-2 md:row-span-1"
          src="images/city.jpg"
          alt="City View"
        />
        <img
          className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200 lg:row-span-1 lg:col-span-1 md:col-span-2"
          src="images/image.jpg"
          alt="City Night View"
        />
        <img
          className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200 lg:row-span-1 lg:col-span-1 md:col-span-2"
          src="images/doha.jpg"
          alt="Doha City"
        />
      </div>

      <div className="my-10 text-center">
        <h1 className="text-4xl font-bold">Наши рекомендации</h1>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-10 my-10 justify-items-center items-center pb-10 border-b">
          {/* Map through the placesData array to render PlaceCard components */}
          {placesData.map((place, index) => (
            <PlaceCard
              key={index}
              image={place.image}
              title={place.title}
              price={place.price}
              description={place.description}
              duration={place.duration}
              rating={place.rating}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Places;
