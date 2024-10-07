import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold  text-2xl">
          <span className="text-green-500">&lt;</span>
          Pass<span className="text-green-500">OP/&gt;</span>
        </div>
        {/* <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold" href="/">
              Home
            </a>
            <a className="hover:font-bold" href="#">
              About
            </a>
            <a className="hover:font-bold" href="#">
              Contact
            </a>
          </li>
        </ul> */}
        <button className="text-white bg-green-500 my-5 rounded-full flex  justify-between items-center ring-1 ring-white">
          <span className="font-bold px-2">Github</span>
          <img
            className="invert w-10 "
            src="Icons/icons8-github-50.png"
            alt="github"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
