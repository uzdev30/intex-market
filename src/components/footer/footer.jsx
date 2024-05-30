import { useState } from "react";
import React from "react";
import Localization from "../../Language/language";
//images
import man from "../../assets/images/man.svg";
import check from "../../assets/images/check.svg";
function Footer({ lang }) {
  const [fooModal, setfooModal] = useState(false);
  const [modalc, setModalc] = useState(false);
  return (
    <div>
      <dialog
        className="w-[441px] translate-y-[-320px] py-5  h-[584px] border    rounded-2xl"
        open={fooModal}
      >
        <i
          onClick={() => setfooModal(false)}
          className="fas fa-x text-[22px] mb-10 text-gray-600"
        ></i>
        <img className="mx-auto" src={man} alt="img" />
        <h3 className="text-[30px] font-[600] my-5 mx-auto text-center">
          {Localization[lang].modal.title6}
        </h3>
        <input
          placeholder={Localization[lang].modal.title1}
          className=" outline-none border rounded-2xl shadow-lg ml-5 mx-auto text-[22px] font-[600] px-10 w-[395px] h-[61px]"
          type="text"
        />
        <input
          placeholder={Localization[lang].modal.title2}
          className=" outline-none border rounded-2xl shadow-lg ml-5 mx-auto text-[22px] font-[600] px-10 my-10 w-[395px] h-[61px]"
          type="text"
        />
        <button
          onClick={() => (setfooModal(false), setModalc(true))}
          className=" outline-none px-10 text-[22px] font-[600] rounded-2xl bg-yellowBg mx-auto ml-20 text-center w-[237px] h-[47px]"
        >
          {Localization[lang].content.title4}
        </button>
      </dialog>
      <dialog
        className={`${
          modalc && " bg-[rgba(0, 0, 0, 1)]"
        } w-[1100px] h-[584px] mt-[300px]   translate-y-[-700px] rounded-2xl border p-5`}
        open={modalc}
      >
        <i
          onClick={() => setModalc(false)}
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
            <button
              onClick={() => setfooModal(true)}
              className="w-[239px] h-[37px] text-black font-[500] rounded-md bg-yellowBg"
            >
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
    </div>
  );
}

export default Footer;
