import React from "react";
import Localization from "../../Language/language";
import { useState } from "react";
//images & logos
import logo from "../../assets/images/logo.png";
import telegram from "../../assets/images/telegram.svg";
import instagram from "../../assets/images/instagram.svg";

function Header({ lang, setLang, open, setOpen }) {
  console.log(open);
  return (
    <div className="bg-darkBg text-mainColor py-4 px-[70px] max-[376px]:px-[20px] max-[376px]:py-[20px]   h-[74px]">
      <ul className="flex text-[22px] justify-between">
        <li>
          <img
            className="max-[376px]:w-[192px] max-[376px]:mt-[3px]  "
            src={logo}
            alt=""
          />
        </li>
        <li className="flex justify-between max-[376px]:hidden w-[500px]">
          <a className="hover:text-gray-300" href="#">
            {Localization[lang].header.title1}
          </a>
          <a className="hover:text-gray-300" href="#">
            {Localization[lang].header.title2}
          </a>
        </li>
        <li className="flex   ">
          <a className="max-[376px]:hidden" href="#">
            (99) 911 02 04
          </a>
          <img className="max-[376px]:w-[35px]" src={telegram} alt="log" />
          <img className="max-[376px]:w-[35px]" src={instagram} alt="logo" />
          <select
            className=" text-darkColor max-[376px]:w-[35px]  max-[376px]:h-[20px]  max-[376px]:mb-[12px]  max-[376px]:text-[15px] h-[26px] w-[46px] outline-none rounded  mt-[7px]"
            onChange={(e) => setLang(e.target.value)}
          >
            <option value={"uz"}>uz</option>
            <option value={"ru"}>ru</option>
          </select>
        </li>
        <li className="hidden max-[376px]:block">
          <i
            onClick={() => setOpen(true)}
            className={`${open && "hidden"} fas fa-bars`}
          ></i>

          <dialog
            open={open}
            className={`w-[284px] order text-mainColor  ml-[92px] p-2 px-5  shadow-shadow mt-[-20px]  bg-darkBg`}
          >
            <i
              onClick={() => setOpen(false)}
              className="fas fa-x ml-[240px]"
            ></i>
            <img className="mx-auto" src={logo} alt="img" />
            <button className="w-[240px] h-[56px] mx-auto mt-10 text-[17px]  text-darkColor  bg-white rounded-xl">
              {Localization[lang].header.title1}
            </button>
            <button className="w-[240px] h-[56px] mx-auto  mt-5 text-[17px]  text-darkColor  bg-white rounded-xl">
              {Localization[lang].header.title2}
            </button>
            <button className="w-[240px] h-[56px] flex py-2 text-[21px]  mx-auto text-center items-center   px-[26px] mt-40 text-white  bg-[#139D4B] rounded-xl">
              <i className="fas fa-phone mt-2"></i>
              <p className="ml-1"> {Localization[lang].header.title3}</p>
            </button>
            <button className="w-[240px] h-[56px] flex py-2 text-[21px]  mx-auto    justify-between px-[58px] mt-5 text-darkColor  bg-white rounded-xl">
              <i className="fa-brands  fa-telegram mt-1 text-[25px]"></i>
              <p> {Localization[lang].header.title4}</p>
            </button>
            <button className="w-[240px] h-[56px] flex py-2 text-[21px]  mx-auto    justify-between px-[52px] mt-5 text-darkColor  bg-white rounded-xl">
              <i className="fa-brands fa-instagram mt-1 text-[25px]"></i>
              <p> {Localization[lang].header.title5}</p>
            </button>
          </dialog>
        </li>
      </ul>
    </div>
  );
}

export default Header;
