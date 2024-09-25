import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiOutlineMessage,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { TfiAlarmClock } from "react-icons/tfi";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-4/5 m-auto py-10 cursor-default">
      <div className="md:flex md:justify-between sm:grid sm:grid-cols-2 sm:justify-center items-center my-10">
        {/* Company Information */}
        <div className="space-y-5 py-5 border-b">
          <h1 className="text-3xl font-bold cursor-pointer">Маскан Тур</h1>
          <div className="flex space-x-5">
            <AiFillFacebook size={"1.5rem"} className="cursor-pointer" />
            <AiFillInstagram size={"1.5rem"} className="cursor-pointer" />
            <AiFillTwitterSquare size={"1.5rem"} className="cursor-pointer" />
            <AiOutlineWhatsApp size={"1.5rem"} className="cursor-pointer" />
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlinePhone />
            <p>+998-93-473-4989</p>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlineMessage />
            <p>info@mascantravel.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <CiLocationOn />
            <p>Ташкент, Узбекистан</p>
          </div>
          <div className="flex items-center space-x-2">
            <TfiAlarmClock />
            <p>Пн-Пт: 09:00 - 18:00</p>
          </div>
        </div>

        {/* Travel Section */}
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold">Путешествия</h1>
          <a className="text-xs text-gray-400" href="/">
            О нас
          </a>
          <a className="text-xs text-gray-400" href="/">
            Услуги
          </a>
          <a className="text-xs text-gray-400" href="/">
            Блог
          </a>
          <a className="text-xs text-gray-400" href="/">
            Контакты
          </a>
        </div>

        {/* Account Section */}
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold">Аккаунт</h1>
          <a className="text-xs text-gray-400" href="/">
            Регистрация
          </a>
          <a className="text-xs text-gray-400" href="/">
            Войти
          </a>
          <a className="text-xs text-gray-400" href="/">
            Мои поездки
          </a>
          <a className="text-xs text-gray-400" href="/">
            Контакт
          </a>
        </div>

        {/* Download Section */}
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold">Загрузить</h1>
          <p className="text-xs text-gray-400">
            Доступно в App Store и Google Play
          </p>
          <button className="flex items-center space-x-4 text-left px-5 py-1 border rounded-md">
            <FaAppStore size={"1.5rem"} />
            <h1>
              <p className="text-xs font-bold">Открыть в</p>
              <span className="font-bold">App Store</span>
            </h1>
          </button>
          <button className="flex items-center space-x-4 text-left px-5 py-1 border rounded-md">
            <FaGooglePlay size={"1.5rem"} />
            <h1>
              <p className="text-xs font-bold">Открыть в</p>
              <span className="font-bold">Google Play</span>
            </h1>
          </button>
        </div>
      </div>

      {/* Developed by Section */}
      <div className="text-center mt-10">
        <p className="text-sm text-gray-500">
          Разработано{" "}
          <a
            href="https://www.youtube.com/@FarruxDeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Farrux Developer
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
