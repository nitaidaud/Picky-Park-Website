import { useEffect, useState } from "react";
import { Language } from "../../models/Language";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function LanguageSelector(props: {
  setDir: (dir: string) => void;
}) {
  const setDir: (dir: string) => void = props.setDir;

  const { i18n } = useTranslation();

  const languages: Language[] = [
    {
      name: "English",
      symbol: "en",
      flag: "Images/en.png",
      dir: "ltr",
    },
    {
      name: "עברית",
      symbol: "he",
      flag: "Images/he.png",
      dir: "rtl",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const selectLanguage = (lang: Language) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", (ev) => {
      if (ev.target) {
        const element = ev.target as HTMLElement;
        if (element.id == "language-selector") {
          setIsOpen(true);
        } else setIsOpen(false);
      }
    });
    i18n.changeLanguage(selectedLanguage.symbol);
  }, [i18n, selectedLanguage.symbol]);

  return (
    <div dir="ltr" className="z-20 relative text-left order-first xl:order-last">
      <div className="flex items-center">
        <button
          id="language-selector"
          type="button"
          className="inline-flex justify-center items-center w-fit mx-auto xl:w-full rounded-md px-4 py-2 lg:text-sm font-medium xl:text-gray-700 xl:hover:bg-gray-50 "
        >
          {/* <span className="rtl:ms-2 ltr:me-2">{selectedLanguage.flag}</span> */}
          <img
            width={100}
            className="rtl:ms-2 ltr:me-2 max-w-[30px]"
            src={selectedLanguage.flag}
            alt="flag"
          />
          {selectedLanguage.name}
          <FontAwesomeIcon
            className={`arrow-icon duration-200 ${isOpen ? "-rotate-180" : ""} ms-2`}
            icon={faChevronDown}
          />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md xl:bg-white">
          <div
            className="py-1 w-fit mx-auto bg-white rounded-md"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languages.map((lang) => (
              <button
                key={lang.name}
                className="flex items-center text-nowrap w-fit mx-auto xl:w-full xl:text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  selectLanguage(lang);
                  setDir(lang.dir);
                }}
              >
                {/* <span className="mr-2">{lang.flag}</span> */}
                {/* <span className="mr-2"> */}
                <img
                  width={100}
                  className="mr-2 max-w-[30px]"
                  src={lang.flag}
                  alt="flag"
                />
                {/* </span> */}
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
