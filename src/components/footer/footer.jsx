import React from "react";
import Localization from "../../Language/language";

function Footer({ lang }) {
  return (
    <div className=" text-white  bg-darkBg py-3">
      <ul className="px-[150px] flex justify-between">
        {" "}
        <li className="flex flex-col   items-center ">
          <p className="text-[20px] w-[222px] text-center">
            {Localization[lang].footer.title1}
          </p>
          <input
            className="w-[311px] mt-3 h-[45px] outline-none"
            type="text"
            placeholder={Localization[lang].footer.title2}
          />
          <input
            className="w-[311px] my-5 h-[45px] outline-none"
            type="tell"
            placeholder={Localization[lang].footer.title3}
          />
          <button className="w-[239px] h-[37px] text-black font-[500] rounded-md bg-yellowBg">
            {Localization[lang].footer.title4}
          </button>
        </li>
        <li>
          <div className="flex   w-[150px]">
            <i className="fas fa-clock text-[20px] mt-1"></i>
            <p className="text-[18px] ml-3">
              {Localization[lang].footer.title5}
            </p>
          </div>
          <p className="mt-2">
            <span>{Localization[lang].footer.title6}</span>: 10:00 - 22:00
          </p>
          <p className="text-[20px]">{Localization[lang].footer.title7}</p>
          <div className="flex justify-between w-[150px] mt-5">
            <i className="fas fa-phone text-[35px]"> </i>
            <i className="fa-brands fa-telegram text-[35px]"> </i>
            <i className="fa-brands fa-instagram text-[35px]"> </i>
          </div>
        </li>
        <li>
          <a className="text-[21px]" href="">
            Intex-market.uz
          </a>
          <p>+998(99)911-02-04</p>
          <p className="w-[250px] text-[20px]">
            {Localization[lang].footer.title8}
          </p>
          <pre className="mt-4">
            Разработано в Support Solutions <br /> Все права защищены.
          </pre>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
