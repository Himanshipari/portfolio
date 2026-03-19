import logo from "../assets/logo.jpeg";
import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return <nav className="mb-8 flex items-center justify-between py-6 -mt-8">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/himanshiparihar/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Himanshipari" target="_blank">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/YSfI2wyQLI/" target="_blank">
          <SiLeetcode />
        </a>
    </div>
  </nav>
}

export default Navbar