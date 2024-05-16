import React from "react";
import Localization from "../../Language/language";

import img from "../../assets/images/intex.jpg";
function Hero({ lang }) {
  return (
    <div>
      <img className="w-[1540px] mt-[-px]" src={img} alt="" />
      <div className="bg-darkBg  h-[100px] mt-[-10px] max-[376px]:h-[45px] max-[376px]:mt-[0px]  max-[376px]:text-[23px]    text-mainColor text-center text-[50px]">
        {Localization[lang].hero.title1}
      </div>
      <ul className="text-mainColor px-[180px] mt-10 justify-between flex max-[376px]:px-[30px] max-[376px]:flex-col">
        <li className="bg-darkBg px-3 w-[320px] h-[114px] flex     rounded-tr-[40px] rounded-bl-[40px]">
          <div className="text-[70px] mt-[-22px]   font-[600]">1</div>
          <div className="mx-4 ">
            <h5 className="text-[22px] max-[376px]:font-[100] font-[600] w-[260px] ">
              {Localization[lang].hero.title2}
            </h5>
            <p className="text-[14px]">{Localization[lang].hero.title3}</p>
          </div>
        </li>
        <li className="bg-darkBg px-3 max-[376px]:my-10 w-[320px] h-[114px] flex     rounded-tr-[40px] rounded-bl-[40px]">
          <div className="text-[70px]   mt-[-22px] font-[600]">2</div>
          <div className="mx-4 ">
            <h5 className="text-[22px] max-[376px]:font-[100] font-[600] w-[260px] ">
              {Localization[lang].hero.title4}
            </h5>
            <p className="text-[14px]">{Localization[lang].hero.title5}</p>
          </div>
        </li>
        <li className="bg-darkBg px-3 w-[320px] h-[114px] flex     rounded-tr-[40px] rounded-bl-[40px]">
          <div className="text-[70px] mt-[-22px] font-[600]">3</div>
          <div className="mx-4 ">
            <h5 className="text-[22px] max-[376px]:font-[100] font-[600] w-[260px] ">
              {Localization[lang].hero.title6}
            </h5>
            <p className="text-[14px] mt-3">{Localization[lang].hero.title7}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Hero;
