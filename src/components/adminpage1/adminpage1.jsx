// HooKs

import { useState } from "react";
import { NavLink } from "react-router-dom";

// Data

import OneData from "./OneData";
import TwoData from "./TwoData";

// Images

import Logo from "../../assets/images/Logo.svg";
import SmallPerson from "../../assets/images/SmallPerson.png";
import Search from "../../assets/images/Search.png";

// Code

export default function Adminpage1() {
  const [lsit, setList] = useState(OneData);

  const [search, setSearch] = useState("");
  const [search1, setSearch1] = useState("");
  const [state, setState] = useState(true);
  const [state1, setState1] = useState(false);

  function DeleteFn(id) {
    console.log(id);
  }

  return (
    <section className="section1 border-[1px]">
      <div className="container max-w-[1480px] m-auto flex">
        <li className=" list-none w-[262px] bg-[#ffff]">
          <img
            className="w-[196px] h-[28px] mt-[34px] mb-[34px]"
            src={Logo}
            alt=""
          />
          <hr />
          <ul className="mt-[33px]">
            <li className=" cursor-pointer font-[400] text-[25px] text-[#B4B4C6] mb-[15px]">
              Продукты
            </li>
            <li className="cursor-pointer font-[400] text-[25px] text-[#B4B4C6] mb-[15px]">
              Заказы
            </li>
            <li className="cursor-pointer font-[400] text-[25px] text-[#B4B4C6] mb-[15px]">
              Категории
            </li>
            <li className="cursor-pointer font-[400] text-[25px] text-[#B4B4C6] mb-[15px]">
              Сайт
            </li>
          </ul>
        </li>

        {/* BO'ingan joy */}

        <li className="list-none w-[1180px] bg-[#f9f9f9]">
          <ul className="flex gap-[31px] mt-[32px] ml-[715px]">
            <li className="font-[Trebuchet MS] text-[#A6A6A6] cursor-pointer">
              Просмотр веб-сайта
            </li>
            <li className="h-[14px] border-[2px] mt-[7px]"></li>
            <li className="w-[205px] font-[Trebuchet MS] text-[#A6A6A6] flex gap-[10px] cursor-pointer">
              <img className="w-[18px] h-[22px]" src={SmallPerson} alt="" /> Joe
              Melton
            </li>
          </ul>
          <hr className="mt-[40px]" />

          {state1 && (
            <div className="">
              <input
                className="w-[377px] h-[64px] border-[1px] rounded-[50px] pl-[34px] text-[20px] ml-[42px] mt-[22px]"
                type="text"
                placeholder="Найти"
                onChange={(evt) => setSearch1(evt.target.value)}
              />
              <img className="mt-[-47px] ml-[370px]" src={Search} alt="" />
            </div>
          )}

          {state && (
            <div className="">
              <input
                className="w-[377px] h-[64px] border-[1px] rounded-[50px] pl-[34px] text-[20px] ml-[42px] mt-[22px]"
                type="text"
                placeholder="Найти"
                onChange={(evt) => setSearch(evt.target.value)}
              />
              <img className="mt-[-47px] ml-[370px]" src={Search} alt="" />
            </div>
          )}
          <ul className="flex mt-[40px] ml-[390px] gap-[60px]">
            <li
              className="font-[600] text-[35px] text-[#A6A6A6] "
              onClick={() => {
                setState(true);
                setState1(false);
              }}
            >
              Заказы
            </li>
            <li
              className="font-[600] text-[35px] text-[#A6A6A6]"
              onClick={() => {
                setState(false);
                setState1(true);
              }}
            >
              Консультации
            </li>
          </ul>
          {/* 1-bo'lim */}
          {state && (
            <div className="">
              <li className="w-[1088px] h-[70px] bg-[#fff] rounded-[50px] ml-[42px] mt-[66px] flex">
                <li className="text-[20px] w-[118px] mt-[17px] ml-[40px]">
                  Имя клиента
                </li>
                <li className="text-[20px] w-[77px] ml-[57px] mt-[17px] ">
                  Телефон
                </li>
                <li className="text-[20px] mt-[17px] ml-[42px] ">
                  Изображение
                </li>
                <li className="text-[20px] mt-[5px] ml-[24px] w-[95px]">
                  Размер(м)/ Глубина(см)
                </li>
                <li className="text-[20px] mt-[17px] ml-[43px] w-[88px]">
                  Цена(сум)
                </li>
                <li className="text-[20px] mt-[17px] w-[53px] ml-[26px]">
                  Адрес
                </li>
                <li className="text-[20px] mt-[17px] ml-[62px] w-[56px]">
                  Время
                </li>
                <li className="text-[20px] mt-[17px] ml-[72px] w-[84px]">
                  Действия
                </li>
              </li>
              <ul className="ml-[42px] mt-[22px]">
                {OneData.filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.name.toLowerCase().includes(search);
                }).map((item, index) => (
                  <li
                    key={index}
                    className="flex w-[1088px] h-[69px] bg-[#fff] mb-[8px] rounded-[30px]"
                  >
                    <h5 className="w-[142px] mt-[20px] ml-[49px] text-[20px]">
                      {item.name}
                    </h5>
                    <h5 className=" w-[94px] ml-[28px] text-[18px] mt-[20px]">
                      {item.number}
                    </h5>
                    <div className="w-[110px] h-[49px] ml-[25px] mt-[15px]">
                      {item.img}
                    </div>
                    <div className="w-[114px] ml-[37px] mt-[20px]">
                      {item.razmer}
                    </div>
                    <div className="w-[111px] ml-[14px] mt-[20px]">
                      {item.cost}
                    </div>
                    <div className="w-[111px] ml-[3px] text-[15px]">
                      {item.adres}
                    </div>
                    <div className="w-[142px] mt-[20px]">{item.date}</div>
                    <input type="checkbox" />
                    <i
                      class="bx bxs-trash text-[red] mt-[25px] ml-[15px]"
                      onClick={() => DeleteFn(item.id)}
                    ></i>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {state1 && (
            <div className="">
              <li className="w-[1088px] h-[70px] bg-[#fff] rounded-[30px] ml-[42px] mt-[72px] flex">
                <li className="text-[20px] ml-[50px] mt-[20px]">Имя клиента</li>
                <li className="ml-[215px] text-[20px] mt-[20px]">
                  Телефон клиента
                </li>
                <li className="mt-[20px] text-[20px] ml-[161px]">Время</li>
                <li className="mt-[20px] text-[20px] ml-[227px]">Действия</li>
              </li>
              <ul className="ml-[42px] mt-[22px]">
                {TwoData.filter((item) => {
                  return search1.toLowerCase() === ""
                    ? item
                    : item.name.toLowerCase().includes(search1);
                }).map((item, index) => (
                  <li
                    className="flex w-[1088px] h-[69px] bg-[#fff] mb-[8px] rounded-[30px]"
                    key={index}
                  >
                    <h5 className="w-[210px] mt-[20px] ml-[49px] text-[20px]">
                      {item.name}
                    </h5>
                    <h5 className=" w-[120px] ml-[118px] mt-[20px] text-[20px]">
                      {item.number}
                    </h5>
                    <h5 className="ml-[200px] w-[142px] text-[20px] mt-[20px]">
                      {item.date}
                    </h5>
                    <input type="checkbox" className="ml-[144px]" />
                    <i
                      class="bx bxs-trash text-[red] mt-[25px] ml-[15px]"
                      onClick={DeleteFn(item.id)}
                    ></i>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      </div>
    </section>
  );
}
