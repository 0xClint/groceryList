import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container w-3/4 mx-auto  h-[4.7] shadow-md bg-blue-600 text-white">
      <div className="header flex justify-between items-center px-8 h-20 text-[1.3rem]">
        <Link to="/">
          <div className="header-logo  flex cursor-pointer">
            Grocylist
            <FaShoppingCart className="text-[2rem] ease-in-out duration-100 hover:scale-125 ml-1" />
          </div>
        </Link>
        <div className="header-button  flex">
          <a
            href="https://github.com/Omkar0803/groceryList"
            target="_blank"
            className=" flex p-2 bg-gray-900 rounded-lg text-[0.9rem] hover:bg-gray-800 ease-in-out duration-100 hover:scale-105"
          >
            <GoMarkGithub className="text-[1.2rem] mx-2" />
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
