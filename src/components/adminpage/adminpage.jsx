import React, { useState } from "react";
import Localization from "../../Language/language";

///logos
import logo from "../../assets/images/Logo.svg";

function Adminpage({ lang, data }) {
  let [username, setUsrename] = useState("");
  let [password, setPassword] = useState("");
  let [modal, setModal] = useState(true);
  let [item, setItem] = useState(true);
  const [firstate, setFirstate] = useState(true);
  const clickFn = (e) => {
    e.preventDefault();
    setUsrename(e.target.username.value);
    setPassword(e.target.password.value);
    if (e.target.username.value === "" || e.target.password.value === "") {
      alert("You must fill inputs");
    } else {
      window.localStorage.setItem("username", e.target.username.value);
      window.localStorage.setItem("password", e.target.password.value);
    }

    if (password === "menpassword" && username === "menusername") {
      setModal(false);
    } else {
      alert("password yoki username xato ");
    }
    setModal(false);
    // setPassword("");
    // setUsrename("");
  };
  return (
    <div className="p-5">
      <dialog
        className="my-10 w-[621px] py-10 text-[#A3A3A3] h-[519px] shadow-lg border rounded-xl"
        open={modal}
      >
        <img className="mx-auto w-[300px]" src={logo} alt="img" />
        <p className="w-[400px] mx-auto text-center text-[18px] mt-10">
          {Localization[lang].admin.titlemodal1}
        </p>
        <form
          onSubmit={(e) => clickFn(e)}
          className="mt-10 mx-auto items-center flex flex-col text-center"
        >
          <input
            name="username"
            className="border shadow-lg outline-none w-[359px] px-3 text-center text-[20px] h-[61px] rounded-2xl"
            type="text"
            placeholder={Localization[lang].admin.titlemodal2}
          />
          <input
            name="password"
            className="border shadow-lg outline-none w-[359px] my-5 px-3 text-center text-[20px] h-[61px] rounded-2xl"
            type="password"
            placeholder={Localization[lang].admin.titlemodal3}
          />
          <button className="mt-10 w-[237px] h-[47px] bg-[#3F8C8E] rounded-2xl shadow-lg text-[22px] text-white">
            {Localization[lang].admin.titlemodal4}
          </button>
        </form>
      </dialog>

      {!modal && (
        <div className="container mx-auto pr-5">
          <div className="flex justify-between">
            <img src={logo} alt="" />
            <div className="flex justify-between text-[18px] w-[360px] text-[#A6A6A6]">
              <p>{Localization[lang].admin.title5}</p>
              <hr className="border w-[1px] text-black h-[15px] mt-2" />
              <div className="flex w-[140px]">
                <i className="far fa-user mx-3 mt-1"></i>
                <p>Joe Melton</p>
              </div>
            </div>
          </div>

          <hr className="text-[#EBEBFF] h-[3px]  mx-[-30px] bg-[#EBEBFF] my-5 border-[#EBEBFF] " />
          <div className="flex justify-between">
            <div className="flex flex-col mt-5 text-[18px] text-[#A6A6A6]">
              <a
                className={`${firstate && "text-[#009398] font-[500]"}`}
                onClick={() => setItem(true)}
                href=""
              >
                {Localization[lang].admin.title1}
              </a>
              <a className="my-5" href="">
                {Localization[lang].admin.title2}
              </a>

              <a className="mb-5" href="">
                {Localization[lang].admin.title3}
              </a>
              <a href="">{Localization[lang].admin.title4}</a>
            </div>
            <div className="bg-[#E5E5E5] w-[1300px] p-5">
              {item && (
                <div>
                  <div className="flex justify-between px-5">
                    <div className="w-[377px] h-[64px] py-2 px-3 text-black rounded-full flex justify-between  bg-white">
                      <input
                        className=" outline-none h-[50px]"
                        placeholder={Localization[lang].admin.title6}
                        type="text"
                      />
                      <hr />
                      <i className="fas fa-search mt-4 mr-5 text-teal-500 text-[22px]"></i>
                    </div>
                    <button className="text-white w-[222px] py-5 rounded-full h-[64px] text-[18px] bg-[#009398]">
                      {Localization[lang].admin.title7}
                    </button>
                  </div>
                  <div className="mx-auto text-center  text-[30px] font-[600] text-[#A6A6A6]">
                    <button
                      className={`${
                        firstate &&
                        "text-[#009398]  border-b-[3px] border-[#009398]"
                      } mr-5`}
                    >
                      Каркасные
                    </button>
                    <button
                      className={`${
                        !firstate &&
                        "text-[#009398]  border-b-[3px] border-[#009398]"
                      }`}
                    >
                      Надувные
                    </button>
                  </div>
                  {firstate && (
                    <table className="mt-10">
                      <thead className="w-[1088px]  border-4 rounded-full">
                        <tr className="w-[1088px] border  rounded-full h-[69px] bg-white">
                          <th className="w-[150px]">Изображение</th>
                          <th>Цена(сум)</th>
                          <th>Количество</th>
                          <th>Рамка</th>
                          <th>Размер(м)</th>
                          <th>Глубина(см)</th>
                          <th>Действия</th>
                        </tr>
                      </thead>

                      {data.slice(0, 5).map((iet) => {
                        return (
                          <tbody className="">
                            <tr className="bg-white border mt-5">
                              <td>
                                <img
                                  className="w-[110px] h-[41px]"
                                  src={iet.img}
                                  alt=""
                                />
                              </td>
                              <td className="">
                                <p className="bg-vertika text-gray-400">
                                  {iet.cost2}
                                </p>
                                <p>{iet.cost1}</p>
                              </td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </table>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Adminpage;
