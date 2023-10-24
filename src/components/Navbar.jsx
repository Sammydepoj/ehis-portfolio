import React, { useEffect, useState } from "react";
import { styles } from "../utils/styles";
import { navLinks } from "../utils/constants";
import menu from "../images/menu.svg";
import close from "../images/close.svg";
import Logo from "../images/logo.jfif";
import { Link } from "react-router-dom";
import {
  LinkedinOutlined,
  MediumOutlined,
  TwitterOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const data = [
    {
      img: <LinkedinOutlined />,
      url: "https://www.linkedin.com/in/ehis-iribhogbe/",
    },
    {
      img: <MediumOutlined />,
      url: "https://medium.com/@ehisjude420",
    },
    {
      img: <TwitterOutlined />,
      url: "https://twitter.com/its_ehis",
    },
    {
      img: <GithubOutlined />,
      url: "https://github.com/ehis0075",
    },
  ];

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-[#050816]" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <span className="flex items-center gap-2">
          <img
            src={Logo}
            alt="logo"
            className="w-10 h-10 object-contain bg-white"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Ehis &nbsp;
            <span className="sm:block hidden"> | &nbsp; Porfolio</span>
          </p>
        </span>
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      <div className="flex gap-10 text-2xl">
        {data.map((x, i) => (
          <Link to={x.url} target="_blank">
            {x.img}
          </Link>
        ))}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
