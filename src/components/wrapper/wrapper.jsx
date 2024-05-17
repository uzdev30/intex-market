import React from "react";
import Localization from "../../Language/language";

function Wrapper({ lang }) {
  return (
    <div className="bg-darkBg text-center pb-5 my-10 text-white">
      <h5 className="text-[50px] max-[376px]:text-[25px]">
        {Localization[lang].wrapper.title1}
      </h5>
      <p className="text-[20px] max-[376px]:text-[13px] max-[376px]:w-[326px] w-[800px] m-auto">
        {Localization[lang].wrapper.title2}
      </p>
      <button className="bg-yellowBg mt-2 max-[376px]:w-[167px] max-[376px]:rounded-[20px ] rounded-lg font-[600] w-[252px] text-black">
        {Localization[lang].wrapper.title3}
      </button>{" "}
    </div>
  );
}

export default Wrapper;
