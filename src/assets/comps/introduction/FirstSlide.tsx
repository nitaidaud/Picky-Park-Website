import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
// import Partners from "./Partners";

export default function FirstSlide() {
  const { t } = useTranslation();
  
  return (
    <div
      className="first-slide min-h-fit h-screen md:mt-14 lg:mt-20 2xl:mt-0"
    >
      <div className="h-full w-full flex justify-start items-center">
        <div className="lg:w-2/3 mx-auto">
          <h2 className="uppercase text-center text-8xl lg:text-start md:text-8xl 2xl:text-balance w-full xl:w-1/2">
            {t("welcomeMsg.bigTitle")}
            {/* stop driving{" "} */}
            <span className="text-6xl font-bold w-full text-orange-300">
              {" "}
              <br />
              {t("welcomeMsg.tinyTitle")}
              {/* in circles */}
            </span>
          </h2>
          <h2
            id="partners"
            className="uppercase text-sm mt-10 lg:mt-5 lg:text-start"
            style={{ fontFamily: "Sora", letterSpacing: "0.5em" }}
          >
            {t("welcomeMsg.description")}
            {/* Find your parking now. */}
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
                // fontSize="35px"
                fontSize={"2.5em"}
              />
              <div> Available for iOS</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
