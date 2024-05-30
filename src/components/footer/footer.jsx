import React from "react";
import Localization from "../../Language/language";

function Footer({ lang }) {
  return (
    <div className=" text-white  bg-darkBg py-3">
      <ul className="px-[150px] max-[376px]:px-5 flex justify-between max-[376px]:flex-col">
        {" "}
        <li className="flex flex-col   items-center ">
          <p className="text-[20px] w-[222px] text-center">
            {Localization[lang].footer.title1}
          </p>
          <input
            className="w-[311px] text-[#000]  max-[376px]:w-[272px] max-[376px]:h-[37px] rounded-xl mt-3 h-[45px] outline-none pl-[10px]"
            type="text"
            placeholder={Localization[lang].footer.title2}
          />
          <input
            className="w-[311px]  max-[376px]:w-[272px] max-[376px]:h-[37px] rounded-xl my-5 h-[45px] outline-none text-[#000] pl-[10px]"
            type="tell "
            placeholder={Localization[lang].footer.title3}
          />
          <button className="w-[239px] h-[37px] text-black font-[500] rounded-md bg-yellowBg">
            {Localization[lang].footer.title4}
          </button>
        </li>
        <li className="flex justify-between  w-[680px]  max-[376px]:w-[340px] mt-3 ">
          <li className=" max-[376px]:text-[13px]">
            <div className="flex   w-[150px]">
              <i className="fas fa-clock text-[20px] mt-1"></i>
              <p className="text-[18px] max-[376px]:text-[15px] font-[500] ml-3">
                {Localization[lang].footer.title5}
              </p>
            </div>
            <p className="mt-2 max-[376px]:text-[13px]">
              <span>{Localization[lang].footer.title6}</span>: 10:00 - 22:00
            </p>
            <p className="text-[20px] max-[376px]:text-[13px]">
              {Localization[lang].footer.title7}
            </p>
            <div className="flex justify-between max-[376px]:w-[100px] max-[376px]:mt-8 w-[150px] mt-5">
              <i className="fas fa-phone text-[35px] max-[376px]:text-[25px]">
                {" "}
              </i>
              <i className="fa-brands fa-telegram text-[35px] max-[376px]:text-[25px]">
                {" "}
              </i>
              <i className="fa-brands fa-instagram text-[35px] max-[376px]:text-[25px]">
                {" "}
              </i>
            </div>
          </li>
          <li className="max-[376px]:ml-">
            <a
              className="text-[21px] max-[376px]:text-[15px]"
              href="https://intex-store.uz/"
            >
              Intex-market.uz
            </a>
            <p className="max-[376px]:text-[13px]">+998(99)911-02-04</p>
            <p className="w-[250px] max-[376px]:font-[500]  max-[376px]:text-[13px] max-[376px]:w-[150px] text-[20px]">
              {Localization[lang].footer.title8}
            </p>
            <p className="mt-4 max-[376px]:text-[12px] w-[250px] max-[376px]:w-[151px]">
              Разработано в Support Solution Все права защищены.
            </p>
          </li>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
