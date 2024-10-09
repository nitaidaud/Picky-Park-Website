import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PickyLogo() {
  return (
    <>
      <div className="first-slide w-full 2xl:pt-0 pt-20 h-screen flex justify-center items-center snap-start">
        <div className="w-2/3 m-auto justify-center items-center flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-start text-center relative 2xl:h-2/3">
          <div className="w-full 2xl:w-1/2 mx-auto mb-16 2xl:mb-0">
            <h2 className="uppercase text-8xl 2xl:text-start md:text-8xl 2xl:text-balance">
              stop driving{" "}
              <span className="text-6xl font-bold w-full text-orange-300">
                {" "}
                <br />
                in circles
              </span>
            </h2>
            <h2
              id="partners"
              className="uppercase text-sm mt-10 2xl:text-start"
              style={{ fontFamily: "Sora", letterSpacing: "0.5em" }}
            >
              Find your parking now.
            </h2>
            <div className="apple-btn-style mt-24 mx-auto 2xl:mx-0 2xl:mt-10 min-w-fit md:w-1/2 max-w-56 px-4 py-3 rounded-2xl duration-300">
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
          <div className="flex justify-center xl:justify-end items-center w-full relative h-1/3"></div>
        </div>
      </div>
    </>
  );
}
