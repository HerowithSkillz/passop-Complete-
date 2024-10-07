import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center w-full">
      <div className="logo font-bold  text-2xl">
        <span className="text-green-500">&lt;</span>
        Pass<span className="text-green-500">OP/&gt;</span>
      </div>
      <div className="flex gap-1 justify-center items-center">
        Created with{" "}
        <img className="w-5 h-5" src="Icons/icons8-star-48.png" alt="" /> by
        Herowithskillz T
      </div>
    </div>
  );
};

export default Footer;
