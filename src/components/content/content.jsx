import React from "react";
import { useState } from "react";
import Localization from "../../Language/language";
import check from "../../assets/images/check.svg";

///images & logos

function Content({ data, lang }) {
  const [modal, setModal] = useState(false);
  const [formodal, setFormodal] = useState(false);
  const [inform, setInform] = useState(data);
  const clickFn = (id) => {
    setModal(true);
    const newData = data.filter((item) => item.id === id);
    setInform(newData);
  };

  return (
    <div className={`${modal && " "}`}>
      <div className="bg-darkBg h-[100px] mt-20  z-40 text-mainColor text-center text-[50px] max-[376px]:h-[45px]   max-[376px]:text-[23px]">
        {Localization[lang].content.title1}
      </div>
      <ul className="flex   flex-wrap max-[376px]:flex-col max-[376px]:flex-nowrap max-[376px]:mx-[-130px] justify-between px-[150px] mt-10">
        {data.slice(0, 12).map((item) => {
          return (
            <li
              key={item.id}
              className=" bg-white  w-[360px] rounded-b-2xl shadow-lg my-5 rounded-tr border h-[284px]"
            >
              <p
                className={`${item.inf && "bg-greenBg"}  ${
                  !item.type && "bg-redBg"
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
                  <span className="bg-vertika block   w-[110px] h-[18px]    text-gray-400 pt-[-5px]">
                    {item.cost1}
                  </span>
                  <p className="text-[18px] w-[120px] font-[600] ">
                    {item.cost2}
                  </p>
                </div>
                <button
                  onClick={(e) => clickFn(item.id)}
                  className="rounded-bl-xl font-[600] w-[155px] px-4 h-[22px] mt-3 rounded-tr-xl bg-yellowBg"
                >
                  {item.btn}
                </button>
              </div>
            </li>
          );
        })}
        <dialog
          className={`${
            modal && " bg-[rgba()]"
          } w-[1100px]  h-[584px] mt-[300px] rounded-2xl border p-5`}
          open={modal}
        >
          <i
            onClick={() => setModal(false)}
            className="fas text-end mx-auto text-[22px] text-gray-300 cursor-pointer   ml-[1040px]   fa-x"
          ></i>
          {inform.map((item) => {
            return (
              <div className="flex justify-between">
                <div className="w-[633px] shadow-shadow1 border  rounded-xl h-[500px] mt-2 ml-2 ">
                  <p className="my-5  text-[22px] mx-auto text-darkColor text-center">
                    {item.title}
                  </p>
                  <div className=" h-[300px] ">
                    <img className="w-[500px] mx-auto " src={item.img} alt="" />
                  </div>
                  <p className="text-center mt-8 font-[600] text-[22px]">
                    {item.cost2}
                  </p>
                </div>
                <div>
                  <form className="my-[100px] flex flex-col">
                    <input
                      placeholder={Localization[lang].modal.title1}
                      className="border px-5 text-[20px] font-[600] shadow-lg rounded-2xl outline-none  w-[355px] h-[61px] text-black"
                      type="text"
                    />
                    <input
                      placeholder={Localization[lang].modal.title2}
                      className="border px-5 text-[20px] font-[600] shadow-lg rounded-2xl mt-4 outline-none  w-[355px] h-[61px] text-black"
                      type="text"
                    />
                    <input
                      placeholder={Localization[lang].modal.title3}
                      className="border px-5 text-[20px] font-[600] shadow-lg rounded-2xl mt-4 outline-none  w-[259px] h-[61px] text-black"
                      type="text"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setFormodal(true);
                        setModal(false);
                      }}
                      className="w-[250px] hover:shadow-lg hover:bg-yellow-200   mx-auto rounded-xl font-[600] text-[20px]  h-[40px] mt-4 bg-yellowBg"
                    >
                      {Localization[lang].content.title4}
                    </button>
                  </form>
                </div>
              </div>
            );
          })}
        </dialog>
        <dialog
          className={`${
            modal && " bg-[rgba(0, 0, 0, 1)]"
          } w-[1100px] h-[584px] mt-[300px] rounded-2xl border p-5`}
          open={formodal}
        >
          <i
            onClick={() => setFormodal(false)}
            className="fas text-end mx-auto text-[22px] text-gray-300 cursor-pointer   ml-[1040px]   fa-x"
          ></i>
          <div className="mx-auto items-center text-center">
            <img className=" mx-auto" src={check} alt="" />
          </div>
          <h2 className="mt-10 text-[60px] font-[600]  text-center">
            {Localization[lang].modal.title4}
          </h2>
          <p className="mx-auto text-center text-[25px]">
            {Localization[lang].modal.title5}
          </p>
        </dialog>
      </ul>
    </div>
  );
}

export default Content;
