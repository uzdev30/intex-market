import "./App.css";
// import Adminpage1 from "./components/adminpage1/adminpage1";
import Home from "./components/home/home";
import { Route, Routes } from "react-router-dom";
import Adminpage from "./components/adminpage/adminpage";
// import Adminpage from "./components/adminpage/adminpage";
import Localization from "./Language/language";
import React, { useEffect, useState } from "react";
//images
import pool from "./assets/images/hovuz.jpg";
import basen from "./assets/images/basen.png";
import longBasen from "./assets/images/longpool.png";
import round from "./assets/images/round.png";
import higher from "./assets/images/higher.png";
import pools from "./assets/images/pool.png";
export const Context = React.createContext();

function App() {
  const [lang, setLang] = useState("ru");
  const [datas, setDatas] = useState();
  const data = [
    {
      id: 1,
      inf: Localization[lang].content.title2,
      title: Localization[lang].content.title3,
      img: pool,
      cost1: Localization[lang].content.cost2,
      cost2: Localization[lang].content.cost1,
      btn: Localization[lang].content.order,
      type: true,
    },
    {
      id: 2,
      title: Localization[lang].content.title3,
      img: pool,

      cost1: Localization[lang].content.cost2,
      cost2: Localization[lang].content.cost1,
      btn: Localization[lang].content.order,
      type: true,
    },
    {
      id: 3,
      title: Localization[lang].content.title3,
      img: pool,
      cost1: Localization[lang].content.costm1,
      cost2: Localization[lang].content.cost1,
      btn: Localization[lang].content.order,
      type: true,
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
      type: true,
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
      type: true,
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
      type: true,
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
      type: true,
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
      type: true,
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
      type: true,
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
      type: false,
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
      type: false,
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
      type: false,
    },
    {
      id: 13,
      title: Localization[lang].content.title11,
      img: pools,
      inf: Localization[lang].content.title2,

      width: Localization[lang].content.width2,
      height: Localization[lang].content.height2,
      width1: Localization[lang].content.width21,
      add: Localization[lang].content.add2,
      cost1: Localization[lang].content.costm2,
      cost2: Localization[lang].content.cost2,
      btn: Localization[lang].content.order,
      type: false,
    },
    {
      id: 14,
      title: Localization[lang].content.title11,
      img: pools,
      inf: Localization[lang].content.title2,

      width: Localization[lang].content.width2,
      height: Localization[lang].content.height2,
      width1: Localization[lang].content.width21,
      add: Localization[lang].content.add2,
      cost1: Localization[lang].content.costm2,
      cost2: Localization[lang].content.cost2,
      btn: Localization[lang].content.order,
      type: false,
    },
    {
      id: 15,
      title: Localization[lang].content.title11,
      img: pools,
      inf: Localization[lang].content.title2,

      width: Localization[lang].content.width2,
      height: Localization[lang].content.height2,
      width1: Localization[lang].content.width21,
      add: Localization[lang].content.add2,
      cost1: Localization[lang].content.costm2,
      cost2: Localization[lang].content.cost2,
      btn: Localization[lang].content.order,
      type: false,
    },
  ];

  useEffect(() => {
    fetch("http://localhost:3000/datas")
      .then((response) => response.json())
      .then((datas) => setDatas(datas));
  }, []);
  return (
<<<<<<< HEAD
    <Routes>
      <Route
        path="/"
        element={<Home lang={lang} setLang={setLang} data={data} />}
      />

      <Route path="/admin" element={<Adminpage lang={lang} data={data} />} />
      {/* <Home data={data} lang={lang} setLang={setLang} /> */}
      {/* <Adminpage /> */}
      {/* <Adminpage lang={lang} /> */}
    </Routes>
=======
    <>
      <Home />
      {/* <Adminpage1 /> */}
    </>
>>>>>>> 6cf87fb9d5250291838e0a5dca45cd7311f28af7
  );
}

export default App;
