import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Hero from "../hero/hero";
import { useState } from "react";
import Content from "../content/content";
function Home() {
  const [lang, setLang] = useState("ru");
  const [open, setOpen] = useState(false);
  return (
    <div className={`container  mx-auto bg-mainBg`}>
      <Header lang={lang} open={open} setOpen={setOpen} setLang={setLang} />
      <Hero lang={lang} />
      <Content lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default Home;
