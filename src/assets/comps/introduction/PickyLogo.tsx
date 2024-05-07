// import { LazyLoadImage } from "react-lazy-load-image-component";

import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PickyLogo() {
  return (
    <>
      <div className="mt-28 w-full grid justify-center items-center md:flex md:justify-between text-center">
        <div className="w-1/2 m-auto mb-16 md:mb-0">
          <h2 className="text-8xl text-balance">Parking Can Be Simpler</h2>
          <h2
            className="uppercase text-sm mt-10 text-center"
            style={{ fontFamily: "Sora", letterSpacing: "0.5em" }}
          >
            Future of parking.
          </h2>
        </div>
        
        <div className="m-auto">
          <img
            loading="lazy"
            className="w-full m-auto"
            src="..\..\Images\PhoneExample.png"
            alt="logo"
          />
        </div>
      </div>

      <div className="btn-style mt-24 md:mt-10 w-fit m-auto p-6 rounded-full duration-300">
        <a
          href="https://apps.apple.com/il/app/picky-park/id6476976854"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try For Free <FontAwesomeIcon icon={faApple}/>
        </a>
      </div>
    </>
  );
}
