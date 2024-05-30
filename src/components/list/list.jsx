import React from "react";
import Localization from "../../Language/language";
function List({ data, lang }) {
  return (
    <div>
      <h6 className="bg-darkBg text-center pb-5 my-10 text-[50px] max-[376px]:text-[20px] max-[376px]:h-[32px]  text-white">
        {Localization[lang].list.title1}{" "}
      </h6>
      <ul className="flex justify-between mx-[150px] max-[376px]:flex-col max-[376px]:mx-[20px]">
        {data.slice(12, 15).map((item) => {
          return (
            <li className=" list-none bg-white  w-[340px] rounded-b-2xl shadow-lg my-5 rounded-tr border h-[284px]">
              <p
                className={`${item.inf && "bg-greenBg"}  ${
                  !item.type && "bg-greenBg "
                } w-[140px] h-[28px] text-white rounded-br-2xl px-3`}
              >
                {item.inf}
              </p>
              <h4 className="text-[20px] mt-4 text-darkColor mx-auto text-center">
                {item.title}
              </h4>
              <img className=" mx-auto mt-4" src={item.img} alt="igm" />
              <div className="flex px-5 justify-between mt-4">
                <div className="">
                  <span className="bg-vertika block    h-[18px]     text-gray-400 pt-[-5px]">
                    {item.cost1}
                  </span>
                  <p className="text-[18px] font-[600] ">{item.cost2}</p>
                </div>
                <button className="rounded-bl-xl font-[600] px-4 h-[22px] mt-3 rounded-tr-xl bg-yellowBg">
                  {item.btn}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
