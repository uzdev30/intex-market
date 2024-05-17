import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Hero from "../hero/hero";
import { useState } from "react";
import Content from "../content/content";
import Sidebar from "../sidebar/sidebar";
import Wrapp from "../wrapp/wrapp";
import Wrapper from "../wrapper/wrapper";
function Home() {
  const [lang, setLang] = useState("ru");
  const [open, setOpen] = useState(false);
  return (
    <div className={`container  mx-auto bg-mainBg`}>
      <Header lang={lang} open={open} setOpen={setOpen} setLang={setLang} />
      <Hero lang={lang} />
      <Content lang={lang} />
      <Wrapper lang={lang} />
      <Wrapp lang={lang} />
      <Sidebar lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default Home;
