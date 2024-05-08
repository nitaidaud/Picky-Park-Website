// import { LazyLoadImage } from "react-lazy-load-image-component";

import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PickyLogo() {
  return (
    <>
      <div className="mt-28 w-full justify-center items-center flex flex-col xl:flex-row xl:justify-between text-center">
        <div className="w-full xl:w-1/2 m-auto mb-16 xl:mb-0"> 
         {/* bg-white bg-opacity-30 p-4 rounded-xl */}
          <h2 className="text-6xl xl:text-start md:text-8xl xl:text-balance">
            Parking Can Be Simpler
          </h2>
          <h2
            className="uppercase text-sm mt-10 xl:text-start"
            style={{ fontFamily: "Sora", letterSpacing: "0.5em" }}
          >
            Future of parking.
          </h2>
          <div className="apple-btn-style mt-24 mx-auto xl:mx-0 xl:mt-10 min-w-fit md:w-1/2 max-w-56 px-4 py-3 rounded-2xl duration-300">
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

        <div className="flex justify-center xl:justify-end items-center">
          <img
            loading="lazy"
            className="w-2/3"
            src="..\..\Images\PhoneExample.png"
            alt="logo"
          />
        </div>
      </div>
    </>
  );
}
