import React from "react";
import { useState } from "react";

import Header from "../header/header";
import Footer from "../footer/footer";
import Hero from "../hero/hero";
import Content from "../content/content";
import Sidebar from "../sidebar/sidebar";
import Wrapp from "../wrapp/wrapp";
import Wrapper from "../wrapper/wrapper";
<<<<<<< HEAD
import List from "../list/list";
import { useState } from "react";
///images
function Home({ lang, data, setLang }) {
=======

function Home() {
  const [lang, setLang] = useState("ru");
>>>>>>> 6cf87fb9d5250291838e0a5dca45cd7311f28af7
  const [open, setOpen] = useState(false);
  return (
    <div className={`container  mx-auto bg-mainBg`}>
      <Header open={open} setOpen={setOpen} lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Content data={data} lang={lang} />
      <List data={data} lang={lang} />
      <Wrapper lang={lang} />
      <Wrapp lang={lang} />
      <Sidebar lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default Home;
