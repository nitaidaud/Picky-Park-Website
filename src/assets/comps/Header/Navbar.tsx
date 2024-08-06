import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ContactUsBtn from "./ContactUsBtn";
import HeaderLink from "./HeaderLink";
import { navLinks } from "../../models/navLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerIcon: IconProp = isOpen ? faX : faBars;

  const navLinks: navLinks[] = [
    {
      content: "How We Work?",
      href: "#",
      isOpen: isOpen,
    },
    {
      content: "Partners",
      href: "#partners",
      isOpen: isOpen,
    },
    {
      content: "Pricing",
      href: "https://apps.apple.com/il/app/picky-park/id6476976854",
      isOpen: isOpen,
      target: "_blank",
    },
    {
      content: "About",
      href: "#about",
      isOpen: isOpen,
    },
  ];

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`bg-transparent backdrop-blur-3xl fixed w-full top-0 start-0 lg:h-fit ${
        isOpen ? "h-full" : "h-fit"
      }`}
    >
      <div className="w-full 2xl:w-4/5 flex flex-wrap items-start lg:items-center justify-between mx-auto p-4 h-full">
        {/* <div> */}
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={() => setIsOpen(false)}
        >
          <img
            loading="lazy"
            src="..\Images\pickyLogoImgFixed.png"
            alt="Picky Logo"
            className="w-24 "
            width={130}
            height={130}
          />
        </a>
        {/* </div> */}

        <div className="contact-us-btn items-center flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
          <ContactUsBtn />

          <FontAwesomeIcon
            icon={hamburgerIcon}
            className="hamburgerBtn text-white inline-flex my-auto items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <div
          className={`
            w-full 
            h-full
            lg:items-center
            lg:justify-between
            lg:flex 
            lg:w-auto 
            lg:order-1 
            ${isOpen ? "flex" : "hidden h-0"}`}
          id="navbar-sticky"
        >
          <div className="nav-links flex flex-col justify-evenly gap-3 text-3xl sm:justify-stretch sm:gap-10 sm:mt-24 p-4 lg:p-0 rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 font-normal w-full">
            {navLinks.map(({ content, href, target }) => {
              return (
                <button
                  key={content}
                  onClick={toggleOpen}
                  className="border-2 p-8 lg:p-2 rounded-2xl border-transparent hover:border-white duration-300 hover:bg-opacity-40 hover:border-opacity-30"
                >
                  <HeaderLink content={content} href={href} target={target} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
