import { useEffect, useRef } from 'react';
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

export default function FirstSlide() {
  const { t } = useTranslation();
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateBackground = () => {
      if (backgroundRef.current) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        backgroundRef.current.style.transform = `translateY(${scrollTop * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', updateBackground);
    window.addEventListener('resize', updateBackground);

    // Initial call to set the background position
    updateBackground();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateBackground);
      window.removeEventListener('resize', updateBackground);
    };
  }, []);

  return (
    <div className="first-slide min-h-fit h-screen relative overflow-hidden">
      <div 
        ref={backgroundRef}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("/path/to/your/background-image.jpg")', // Replace with your actual image path
        }}
      />
      <div className="h-full w-full flex justify-start items-center relative z-10">
        <div className="lg:w-2/3 mx-auto">
          <h2 className="uppercase text-center text-8xl lg:text-start md:text-8xl 2xl:text-balance w-full xl:w-1/2">
            {t("welcomeMsg.bigTitle")}
            <span className="text-6xl font-bold w-full text-orange-300">
              {" "}
              <br />
              {t("welcomeMsg.tinyTitle")}
            </span>
          </h2>
          <h2
            id="partners"
            className="uppercase text-sm mt-10 lg:mt-5 lg:text-start"
            style={{ fontFamily: "Sora", letterSpacing: "0.5em" }}
          >
            {t("welcomeMsg.description")}
          </h2>
          <div className="apple-btn-style mt-24 mx-auto lg:mx-0 md:mt-10 min-w-fit md:w-1/2 max-w-56 px-4 py-3 rounded-2xl duration-300">
            <a
              className="flex justify-evenly items-center text-sm"
              href="https://apps.apple.com/il/app/picky-park/id6476976854"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faApple}
                className="pb-1 max-h-7"
                fontSize={"2.5em"}
              />
              <div>{t("welcomeMsg.download")}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}