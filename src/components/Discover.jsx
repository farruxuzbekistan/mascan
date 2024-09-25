import React from "react";

// Reusable Section component
const Section = ({ image, altText, heading, subHeading, paragraphs }) => {
  return (
    <div className="w-full space-y-5">
      <img
        className="w-full drop-shadow-2xl rounded-lg border-8 border-stones-700 cursor-pointer opacity-80 hover:opacity-100 duration-200"
        src={image}
        alt={altText}
      />
      <div>
        <h2 className="font-bold">{heading}</h2>
        <h1 className="text-2xl font-bold">{subHeading}</h1>
      </div>
      {paragraphs.map((para, index) => (
        <p className="text-sm" key={index}>
          {para}
        </p>
      ))}
    </div>
  );
};

// Reusable CallToAction component
const CallToAction = ({ buttonText, onClick }) => {
  return (
    <div className="w-full h-[400px] my-10 relative">
      <img
        className="w-full h-full object-cover "
        src="images/image-8.jpg"
        alt="Background"
      />
      <div className="w-full h-full absolute top-0 flex justify-center items-center">
        <button
          className="text-4xl text-white font-bold px-5 py-2 border cursor-pointer hover:bg-white hover:text-gray-500 hover:duration-300"
          onClick={onClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

// Main Discover component
const Discover = () => {
  const section1Data = {
    image: "images/safari_desert.jpg",
    altText: "Сафари по пустыне",
    heading: "Путешествие по пустыне",
    subHeading: "Откройте для себя красоту дикой природы",
    paragraphs: [
      "Окунитесь в незабываемое сафари по пустыне, наслаждаясь видом бескрайних дюн и древних поселений.",
      "Вы получите уникальный опыт, который невозможно сравнить с обычными экскурсиями. Путешествие по пустыне — это возможность ощутить настоящую свободу.",
    ],
  };

  const section2Data = {
    image: "images/desert.jpg",
    altText: "Пустынный пейзаж",
    heading: "Уникальный опыт",
    subHeading: "Путешествие по древним тропам",
    paragraphs: [
      "Исследуйте секреты пустыни, узнайте историю и культуру древних кочевников. Погрузитесь в прошлое, гуляя по тем же тропам, что и их предки.",
      "Вы увидите таинственные руины, бескрайние горизонты и почувствуете дух прошлого.",
    ],
  };

  return (
    <div className="w-4/5 m-auto cursor-default">
      <h1 className="text-4xl font-bold text-center">Откройте для себя</h1>

      <div className="w-full m-auto flex flex-col md:flex-row space-y-10 md:space-x-10 justify-between items-center py-10">
        {/* Reusable Section Component for Section 1 */}
        <Section {...section1Data} />

        {/* Reusable Section Component for Section 2 */}
        <div className="w-full space-y-4 text-left">
          <h2 className="font-bold">{section2Data.heading}</h2>
          <h1 className="font-bold text-2xl">{section2Data.subHeading}</h1>
          {section2Data.paragraphs.map((para, index) => (
            <p className="text-sm" key={index}>
              {para}
            </p>
          ))}
          <img
            className="drop-shadow-2xl border-8 border-stones-700 rounded-lg cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src={section2Data.image}
            alt={section2Data.altText}
          />
        </div>
      </div>

      {/* Call to Action Section */}
      <CallToAction buttonText="Узнать больше" />

      {/* Center Content with Images */}
      <div className="my-20 flex justify-between items-center xl:h-[500px]">
        <div className="xl:w-[500px] w-1/3 lg:block hidden">
          <img
            className="w-full h-full object-cover"
            src="images/image-33.jpg"
            alt="Изображение слева"
          />
        </div>
        <div className="xl:w-[500px] p-5 text-center space-y-5 sm:space-y-2">
          <h1 className="md:text-xl sm:text-sm">Пустынные приключения</h1>
          <h2 className="md:text-4xl sm:text-base">
            Ощутите незабываемые эмоции
          </h2>
          <p className="md:text-base sm:text-xs">
            Присоединяйтесь к нашему захватывающему туру и отправьтесь в
            пустынные приключения с опытными гидами.
          </p>
          <button className="mt-5 px-5 py-2 border border-black hover:bg-gray-400 hover:duration-300">
            Забронировать сейчас
          </button>
        </div>
        <div className="xl:w-[500px] w-1/3 lg:block hidden">
          <img
            className="w-full h-full object-cover"
            src="images/image-33.jpg"
            alt="Изображение справа"
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
