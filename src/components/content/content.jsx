import React from "react";
import Localization from "../../Language/language";
///images & logos
import pool from "../../assets/images/hovuz.jpg";
import basen from "../../assets/images/basen.jpg";
import longBasen from "../../assets/images/longpool.png";
import round from "../../assets/images/round.jpg";
import higher from "../../assets/images/higher.jpg";

function Content({ lang }) {
  const data = [
    {
      id: 1,
      inf: Localization[lang].content.title2,
      title: Localization[lang].content.title3,
      img: pool,
      cost1: Localization[lang].content.cost1,
      cost2: Localization[lang].content.cost2,
      btn: Localization[lang].content.order,
    },
    {
      id: 2,
      title: Localization[lang].content.title3,
      img: pool,

      cost1: Localization[lang].content.cost1,
      cost2: Localization[lang].content.cost2,
      btn: Localization[lang].content.order,
    },
    {
      id: 3,
      title: Localization[lang].content.title3,
      img: pool,
      cost1: Localization[lang].content.costm1,
      cost2: Localization[lang].content.cost1,
      btn: Localization[lang].content.order,
    },
    {
      id: 4,
      title: Localization[lang].content.title6,
      img: basen,
      inf: Localization[lang].content.title5,

      width: Localization[lang].content.width1,
      height: Localization[lang].content.height1,
      cost1: Localization[lang].content.costm2,
      cost2: Localization[lang].content.cost2,
      btn: Localization[lang].content.order,
    },
    {
      id: 5,
      title: Localization[lang].content.title7,
      inf: Localization[lang].content.title2,

      img: longBasen,
      width: Localization[lang].content.width2,
      height: Localization[lang].content.height2,
      width1: Localization[lang].content.width21,
      cost1: Localization[lang].content.costm2,
      cost2: Localization[lang].content.cost2,
      btn: Localization[lang].content.order,
    },
    {
      id: 6,
      title: Localization[lang].content.title7,
      inf: Localization[lang].content.title2,

      img: longBasen,
      width: Localization[lang].content.width2,
      height: Localization[lang].content.height2,
      width1: Localization[lang].content.width21,
      cost1: Localization[lang].content.costm2,
      cost2: Localization[lang].content.cost2,
      btn: Localization[lang].content.order,
    },
    {
      id: 7,
      title: Localization[lang].content.title6,
      inf: Localization[lang].content.title2,

      img: round,
      width: Localization[lang].content.width1,
      height: Localization[lang].content.height1,
      add: Localization[lang].content.add,
      cost1: Localization[lang].content.costm2,
      cost2: Localization[lang].content.cost2,
      btn: Localization[lang].content.order,
    },
    {
      id: 8,
      title: Localization[lang].content.title7,
      inf: Localization[lang].content.title2,

      img: round,
      width: Localization[lang].content.width1,
      height: Localization[lang].content.height1,
      add: Localization[lang].content.add,
      cost1: Localization[lang].content.costm2,
      cost2: Localization[lang].content.cost2,
      btn: Localization[lang].content.order,
    },
    {
      id: 9,
      title: Localization[lang].content.title7,
      inf: Localization[lang].content.title2,

      img: round,
      width: Localization[lang].content.width1,
      height: Localization[lang].content.height1,
      add: Localization[lang].content.add,
      cost1: Localization[lang].content.costm2,
      cost2: Localization[lang].content.cost2,
      btn: Localization[lang].content.order,
    },
    {
      id: 10,
      title: Localization[lang].content.title7,
      img: higher,
      inf: Localization[lang].content.title8,

      width: Localization[lang].content.width2,
      height: Localization[lang].content.height2,
      width1: Localization[lang].content.width21,
      add: Localization[lang].content.add2,
      cost1: Localization[lang].content.costm2,
      cost2: Localization[lang].content.cost2,
      btn: Localization[lang].content.order,
    },
    {
      id: 11,
      title: Localization[lang].content.title7,
      img: higher,
      inf: Localization[lang].content.title8,

      width: Localization[lang].content.width2,
      height: Localization[lang].content.height2,
      width1: Localization[lang].content.width21,
      add: Localization[lang].content.add2,
      cost1: Localization[lang].content.costm2,
      cost2: Localization[lang].content.cost2,
      btn: Localization[lang].content.order,
    },
    {
      id: 12,
      title: Localization[lang].content.title7,
      img: higher,
      inf: Localization[lang].content.title8,

      width: Localization[lang].content.width2,
      height: Localization[lang].content.height2,
      width1: Localization[lang].content.width21,
      add: Localization[lang].content.add2,
      cost1: Localization[lang].content.costm2,
      cost2: Localization[lang].content.cost2,
      btn: Localization[lang].content.order,
    },
  ];

  console.log(data);
  return (
    <div>
      <div className="bg-darkBg h-[100px] mt-20  z-40 text-mainColor text-center text-[50px] max-[376px]:h-[45px]   max-[376px]:text-[23px]">
        Каркасные бассейны
      </div>
      <ul className="flex flex-wrap  justify-between px-40 mt-10">
        {data.map((item) => {
          {
            return (
              <li className=" bg-white  w-[340px] rounded-b-2xl shadow-lg my-5 rounded-tr border h-[284px]">
                <p className="bg-greenBg w-[140px] h-[28px] text-white rounded-br-2xl px-3">
                  {item.inf}
                </p>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default Content;
