import React, { useState } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <React.Fragment>
      <div className="w-full h-screen relative">
        <img
          src="images/mesuem.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <nav className="w-full absolute top-0 p-5 flex justify-between items-center text-white z-20">
        <div>
          <h1 className="text-3xl font-bold cursor-pointer">
            <img
              width={100}
              src="images/mascan.png"
              alt="Mascan Travel Agency"
            />
          </h1>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl z-30">
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        <div className="hidden md:flex">
          <ul className="flex space-x-5 font-bold cursor-pointer text-gray-300">
            <li className="hover:text-white">Доха</li>
            <li className="hover:text-white">Аль Вакра</li>
            <li className="hover:text-white">Аль Райян</li>
            <li className="hover:text-white">Аль Хор</li>
          </ul>

          <div className="flex items-center space-x-2 mt-5">
            <AiOutlineSearch className="text-xl cursor-pointer" />

            <input
              className="bg-inherit border-b outline-0 border-gray-300 p-1 w-full"
              type="text"
              placeholder="Поиск"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center space-y-5 pt-20 text-white z-20">
          <ul className="flex flex-col space-y-5 text-center z-20">
            <li className="text-2xl font-bold cursor-pointer">Доха</li>
            <li className="text-2xl font-bold cursor-pointer">Аль Вакра</li>
            <li className="text-2xl font-bold cursor-pointer">Аль Райян</li>
            <li className="text-2xl font-bold cursor-pointer">Аль Хор</li>
          </ul>

          <div className="mt-5 w-4/5 flex items-center space-x-2">
            <AiOutlineSearch className="text-2xl cursor-pointer z-20" />
            <input
              className="bg-inherit border-b outline-0 border-gray-300 p-1 w-full z-20"
              type="text"
              placeholder="Поиск"
            />
          </div>

          <div className="text-white flex space-x-5 mt-10 z-20">
            <AiFillFacebook size={"2rem"} className="cursor-pointer" />
            <AiFillInstagram size={"2rem"} className="cursor-pointer" />
            <AiFillTwitterSquare size={"2rem"} className="cursor-pointer" />
          </div>

          {/* Close button */}
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-3xl z-30"
          >
            <AiOutlineClose />
          </button>
        </div>
      )}

      <div className="absolute top-0 h-screen flex flex-col space-y-10 justify-center items-center bg-black opacity-75 xl:w-1/3 sm:w-1/2 z-0">
        <div className="text-white text-center space-y-5">
          <h2 className="text-2xl font-bold cursor-default">ОТКРОЙТЕ</h2>
          <h1 className="text-5xl font-bold cursor-default">КАТАР</h1>
          <p className="mx-10 text-gray-400 cursor-default">
            Узнайте больше о захватывающей культуре и достопримечательностях
            Катара. Забронируйте своё следующее путешествие с Mascan Travel
            Agency, чтобы испытать незабываемые моменты.
          </p>
        </div>

        <div className="space-x-4">
          <button className="bg-gray-300 py-2 px-5 rounded-md hover:bg-white hover:duration-300">
            Карта
          </button>
          <button className="text-gray-300 border rounded-md py-2 px-5 hover:bg-white hover:text-black hover:duration-300">
            Забронировать поездку
          </button>
        </div>

        <div className="text-white flex space-x-5">
          <AiFillFacebook size={"2rem"} className="cursor-pointer" />
          <AiFillInstagram size={"2rem"} className="cursor-pointer" />
          <AiFillTwitterSquare size={"2rem"} className="cursor-pointer" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
