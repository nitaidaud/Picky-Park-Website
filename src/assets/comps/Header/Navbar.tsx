import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ContactUsBtn from "./ContactUsBtn";
import HeaderLink from "./HeaderLink";
import { navLinks } from "../../models/navLinks";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import pickyLogo from '../../../../public/Images/pickyLogoImgFixed.png'
import carProgressBar from '../../../../public/Images/carProgressBar.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [progressBar, setProgressBar] = useState(0);
  const { t } = useTranslation();
  const hamburgerIcon: IconProp = isOpen ? faX : faBars;
  const [dir, setDir] = useState("ltr");

  const toggleDir = (dir: string) => {
    setDir(dir);
  };

  const navLinks: navLinks[] = [
    {
      // content: "How We Work?",
      content: t("navbar.howWeWork"),
      href: "/#workflow",
      isOpen: isOpen,
    },
    {
      // content: "Partners",
      content: t("navbar.Partners"),
      href: "/#partners",
      isOpen: isOpen,
    },
    {
      // content: "Pricing",
      content: t("navbar.Pricing"),
      href: "/#pricing",
      isOpen: isOpen,
    },
    {
      // content: "About",
      content: t("navbar.About"),
      href: "/AboutUs",
      isOpen: isOpen,
    },
  ];

  useEffect(() => {
    const handleProgress = () => {
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercentage = (scrollY / (docHeight - windowHeight)) * 100;

      setProgressBar(scrollPercentage);
    };

    window.addEventListener("scroll", handleProgress);

    return () => {
      window.removeEventListener("scroll", handleProgress);
    };
  }, []);

  return (
    <nav
      className={`bg-transparent backdrop-blur-3xl fixed w-full top-0 start-0  overflow-y-auto xl:overflow-visible ${
        isOpen ? "h-full" : "h-fit"
      }`}
    >
      <div
        className={`w-full 2xl:w-4/5 flex flex-wrap items-start xl:items-center justify-between mx-auto p-4 h-full min-h-fit ${
          dir == "ltr" ? "xl:flex-row" : "rtl:xl:flex-row-reverse rtl:flex-row"
        }`}
      >
        <a
          href="/#"
          className={`flex items-center space-x-3 rtl:xl:order-2 `}
          onClick={() => {
            if (isOpen) setIsOpen(false);
          }}
        >
          {/* <div> */}
          <img
            loading="lazy"
            // src="..\Images\pickyLogoImgFixed.png"
            src={pickyLogo}
            alt="Picky Logo"
            className="w-24 rtl:"
            width={130}
            height={130}
          />
        </a>
        {/* </div> */}

        <div className="contact-us-btn items-center flex ltr:xl:order-2 rtl:order-first space-x-3 xl:space-x-0 rtl:space-x-reverse">
          <ContactUsBtn />
          <FontAwesomeIcon
            icon={hamburgerIcon}
            className="hamburgerBtn text-white inline-flex my-auto items-center p-2 w-10 h-10 justify-center text-sm rounded-lg xl:hidden rtl:order-first"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <div
          dir={dir}
          className={`
            w-full 
            h-full
            xl:items-center
            xl:justify-between
            xl:flex 
            xl:w-auto 
            xl:order-1 
            ${isOpen ? "flex" : "hidden"}`}
          id="navbar-sticky"
        >
          <div className="nav-links flex flex-col justify-evenly gap-3 text-3xl sm:justify-stretch sm:gap-10 sm:mt-24 p-4 xl:p-0 rounded-lg xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0 font-normal w-full">
            {navLinks.map(({ content, href }) => {
              return (
                <a
                  href={href}
                  key={content}
                  onClick={() => setIsOpen(false)}
                  className="border-2 p-8 xl:p-2 rounded-2xl border-transparent hover:border-white duration-300 hover:bg-opacity-40 hover:border-opacity-30"
                >
                  <HeaderLink content={content} />
                </a>
              );
            })}
            <LanguageSelector setDir={toggleDir} />
          </div>
        </div>
      </div>
      {!isOpen && (
        <div className="fixed w-full left-0 h-2 flex items-end bottom-[0.1em] xl:bottom-0">
          <div
            className="bg-indigo-600 h-full"
            style={{ width: `${progressBar}%` }}
          ></div>
          <img
            // src="/Images/carProgressBar.png"
            src={carProgressBar}
            className="carProgress h-4"
            alt=""
          />
        </div>
      )}
    </nav>
  );
}
