import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PickyLogo() {
  return (
    <>
      <div className="bg-indigo-500 pt-0 md:pt-32 h-full min-h-screen flex justify-center items-center snap-start">
        <div className="w-2/3 m-auto justify-center items-center flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-start text-center relative">
          <div className="w-full 2xl:w-1/2 mx-auto mb-16 2xl:mb-0">
            <h2 className="uppercase text-6xl 2xl:text-start md:text-8xl 2xl:text-balance">
              stop driving{" "}
              <span className="text-6xl font-bold w-full text-orange-300">
                {" "}
                in circles
              </span>
            </h2>
            <h2
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

          <div className="flex justify-center xl:justify-end items-center w-full relative h-1/3">
            {/* <div className="w-full absolute"> */}
            {/* <img
            loading="lazy"
            className="w-2/3"
            src="..\..\Images\parkingImg.png"
            alt="logo"
          /> */}

            <div className="hidden 2xl:flex absolute bg-black h-10 w-36 right-3 bottom-3 rounded-full items-center text-balance hover:scale-110 duration-300 hover:bg-slate-500 play-text uppercase font-semibold">
              Press space to start
            </div>
            {/* <iframe
            src="https://my.spline.design/911lapstogo-164067615931c022b15d8f226f7d8457/"
            frameBorder="0"
            title="parking game"
            width="600px"
            height="600px"
          ></iframe> */}
            <div>
              <iframe
                // src="https://my.spline.design/911lapstogocopy-7cc0cfafba0fca15b5569de6d5fae99e/"
                src="https://my.spline.design/911lapstogo-164067615931c022b15d8f226f7d8457/"
                className="hidden 2xl:block"
                frameBorder="0"
                title="parking game"
                loading="lazy"
                width="750px"
                height="600px"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
