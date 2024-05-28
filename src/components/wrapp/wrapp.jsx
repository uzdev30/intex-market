import React from "react";
import { useEffect, useState } from "react";
import Localization from "../../Language/language";
//importing imagesss

import master from "../../assets/images/master.png";
import car from "../../assets/images/car.png";
import emoji from "../../assets/images/emoji.png";
function Wrapp({ lang }) {
  const [state, setstate] = useState([
    { id: 1, name: "ism" },
    { id: 2, name: "ikkinchi ism" },
  ]);
  useEffect(() => {
    fetch("http://localhost:3000/datas")
      .then((response) => response.json())
      .then((datas) => setstate(datas));
  }, []);
  console.log(state);
  return (
    <div>
      {state.map((item) => {
        return (
          <li className=" list-none" key={item.id}>
            <p>{item.title}</p>
            {/* <p>{item.img}</p> */}
            <img src={item.img} alt="img" />
          </li>
        );
      })}
      <div className="bg-grayBg text-[50px] max-[376px]:w-[376px] max-[376px]:text-[20px] max-[376px]:py-1   max-[376px]:h-[46px]  font-[600] text-center text-darkColor">
        {Localization[lang].wrapp.title1}
      </div>
      <ul className="flex  mx-[150px]  max-[376px]:py-12    max-[376px]:mx-[20px]  max-[376px]:flex-col py-16 justify-between">
        <li className=" w-[300px] flex justify-between ">
          <img
            className=" max-[376px]:w-[70px] max-[376px]:h-[68px]"
            src={master}
            alt="img"
          />

          <div className=" max-[376px]:ml-5">
            <h4 className="text-[30px] max-[376px]:text-[20px] font-bold">
              {Localization[lang].wrapp.title2}
            </h4>
            <p className="w-[150px]  max-[376px]:w-[280px]  max-[376px]:text-[14px]">
              {Localization[lang].wrapp.title3}
            </p>
          </div>
        </li>
        <li className=" w-[320px] justify-between flex  max-[376px]:my-4">
          <img
            className=" max-[376px]:w-[70px] max-[376px]:h-[68px]"
            src={car}
            alt="img"
          />
          <div className=" max-[376px]:ml-5 mt-2">
            <h4 className="text-[27px] max-[376px]:text-[20px] font-bold">
              {Localization[lang].wrapp.title4}
            </h4>
            <p className="w-[150px]  max-[376px]:w-[280px]  max-[376px]:text-[14px]">
              {Localization[lang].wrapp.title5}
            </p>
          </div>
        </li>
        <li className=" w-[300px]  flex">
          <img
            className=" max-[376px]:w-[70px] max-[376px]:h-[68px]"
            src={emoji}
            alt="img"
          />
          <div className=" max-[376px]:ml-5">
            <h4 className="text-[30px] max-[376px]:text-[20px] font-bold">
              {Localization[lang].wrapp.title6}
            </h4>
            <p className="w-[180px]  max-[376px]:w-[280px]  max-[376px]:text-[14px]">
              {Localization[lang].wrapp.title7}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Wrapp;
