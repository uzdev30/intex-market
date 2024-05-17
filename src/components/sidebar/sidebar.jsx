import React from "react";
import Localization from "../../Language/language";

function Sidebar({ lang }) {
  return (
    <div className="mt-10">
      <div className="bg-grayBg text-[50px] max-[376px]:w-[376px] max-[376px]:text-[20px] max-[376px]:py-1   max-[376px]:h-[46px]  font-[600] text-center text-darkColor">
        {Localization[lang].sidebar.title1}
      </div>
      <ul className="flex justify-between max-[376px]:text-[12px] max-[376px]:flex-col max-[376px]:mx-[40px] max-[376px]:py-8     py-16 font-[500] text-[20px] mx-[150px]">
        <li>
          <p className="w-[500px] max-[376px]:w-[311px] ">
            {Localization[lang].sidebar.title2}
          </p>
        </li>{" "}
        <li>
          <div>
            <p className="w-[500px] max-[376px]:my-[30px] max-[376px]:w-[311px] ">
              {" "}
              {Localization[lang].sidebar.title3}{" "}
            </p>
            <div>
              <i className="fas fa-check  bg-darkColor text-white rounded-full h-[17px]  mr-1 mt-1 text-[16px] w-[17px]"></i>{" "}
              {Localization[lang].sidebar.title4}
            </div>
            <div>
              <i className="fas fa-check  bg-darkColor text-white rounded-full h-[17px]  mr-1 mt-1 text-[16px] w-[17px]"></i>{" "}
              {Localization[lang].sidebar.title5}
            </div>{" "}
            <div>
              <i className="fas fa-check  bg-darkColor text-white rounded-full h-[17px]  mr-1 mt-1 text-[16px] w-[17px]"></i>{" "}
              {Localization[lang].sidebar.title6}
            </div>{" "}
            <div>
              <i className="fas fa-check  bg-darkColor text-white rounded-full h-[17px]  mr-1 mt-1 text-[16px] w-[17px]"></i>{" "}
              {Localization[lang].sidebar.title7}
            </div>
            <div>
              <i className="fas fa-check  bg-darkColor text-white rounded-full h-[17px]  mr-1 mt-1 text-[16px] w-[17px]"></i>{" "}
              {Localization[lang].sidebar.title8}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
