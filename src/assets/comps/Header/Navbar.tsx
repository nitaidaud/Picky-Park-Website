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
    <nav className="bg-transparent backdrop-blur-3xl fixed w-full z-20 top-0 start-0">
      <div className="w-full 2xl:w-4/5 flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            loading="lazy"
            src="..\Images\pickyLogoImgFixed.png"
            alt="Picky Logo"
            className="w-24 "
            width={130}
            height={130}
          />
        </a>

        <div className="contact-us-btn flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ContactUsBtn />

          <FontAwesomeIcon
            icon={hamburgerIcon}
            className="inline-flex my-auto items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <div
          className={`
            items-center
            justify-between
            w-full 
            md:flex 
            md:w-auto 
            md:order-1, 
            ${isOpen ? "flex" : "hidden h-0"}`}
          id="navbar-sticky"
        >
          <div className="nav-links flex flex-col p-4 md:p-0 mt-4 border text-xs rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-normal w-full">
            {navLinks.map(({ content, href, target }) => {
              return (
                <button onClick={toggleOpen}
                className="border-2 p-2 rounded-2xl border-transparent hover:border-white duration-300 hover:bg-opacity-40 hover:border-opacity-30">
                  <HeaderLink
                    key={content}
                    content={content}
                    href={href}
                    target={target}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
