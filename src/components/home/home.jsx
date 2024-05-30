import React from "react";
import { useState } from "react";

import Header from "../header/header";
import Footer from "../footer/footer";
import Hero from "../hero/hero";
import Content from "../content/content";
import Sidebar from "../sidebar/sidebar";
import Wrapp from "../wrapp/wrapp";
import Wrapper from "../wrapper/wrapper";
import List from "../list/list";

///images

function Home({ data }) {
  const [lang, setLang] = useState("ru");

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
