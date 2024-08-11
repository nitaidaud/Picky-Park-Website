import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import video from "../../Videos/introVid.mp4";
import {
  faCompass,
  faMobileScreenButton,
  faParking,
  faPeopleArrows,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";

export default function IntroductionInfo() {
  return (
    <div
      id="about"
      className="second-slide flex justify-center items-center text-start h-fit min-h-screen snap-start w-full py-20 lg:px-10 2xl:p-0"
    >
      <div className="h-full lg:h-3/4 xl:flex mx-auto w-full xl:w-4/5 items-center justify-center gap-10 p-5 bg-black bg-opacity-70 rounded-xl">
        <div className="w-full grid gap-10 lg:mt-0 max-w-5xl">
          <div className="flex justify-between items-center gap-3 w-full text-balance my-auto text-center  rounded-3xl order-last sm:order-first py-14 sm:p-0 bg-opacity-50">
            <div className="flex flex-col justify-center items-start sm:w-full px-4 2xl:w-4/5 gap-4 h-full mx-auto">
              <div className="flex justify-center sm:justify-start items-center gap-4 w-2/3 mx-auto sm:w-full hover:bg-indigo-950 p-3 duration-300  rounded-2xl">
                <div className="bg-indigo-900 px-2 py-3 min-w-max w-1/5 rounded-xl justify-center items-center">
                  <FontAwesomeIcon
                    icon={faParking}
                    size="2x"
                    className="min-w-14"
                  />
                </div>

                <div className="flex flex-col text-start">
                  <div>
                    <h2>Easy Way To Park</h2>
                  </div>
                  <div className="text-xs opacity-80">
                    <p className="capitalize">
                      Picky takes the stress out of parking
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center sm:justify-start items-center gap-4 w-2/3 mx-auto sm:w-full hover:bg-indigo-950 p-3 duration-300  rounded-2xl">
                <div className="bg-indigo-900 px-2 py-3 min-w-max w-1/5 rounded-xl justify-center items-center">
                  <FontAwesomeIcon
                    icon={faStreetView}
                    size="2x"
                    className="min-w-14"
                  />
                </div>

                <div className="flex flex-col text-start">
                  <div>
                    <h2>Find Parking Around You</h2>
                  </div>
                  <div className="text-xs opacity-80">
                    <p className="capitalize">
                      Picky providing real-time information on available parking
                      spaces
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center sm:justify-start items-center gap-4 w-2/3 mx-auto sm:w-full hover:bg-indigo-950 p-3 duration-300  rounded-2xl">
                <div className="bg-indigo-900 px-2 py-3 min-w-max w-1/5 rounded-xl justify-center items-center">
                  <FontAwesomeIcon
                    icon={faPeopleArrows}
                    size="2x"
                    className="min-w-14"
                  />
                </div>

                <div className="flex flex-col text-start">
                  <div>
                    <h2>Sharing Parkings</h2>
                  </div>
                  <div className="text-xs opacity-80">
                    <p className="capitalize">
                      Choose Between A Lot Of available Parkings
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center sm:justify-start items-center gap-4 w-2/3 mx-auto sm:w-full hover:bg-indigo-950 p-3 duration-300  rounded-2xl">
                <div className="bg-indigo-900 px-2 py-3 min-w-max w-1/5 rounded-xl justify-center items-center">
                  <FontAwesomeIcon
                    icon={faCompass}
                    size="2x"
                    className="min-w-14"
                  />
                </div>

                <div className="flex flex-col text-start">
                  <div>
                    <h2>Explore Your Next Park</h2>
                  </div>
                  <div className="text-xs opacity-80">
                    <p className="capitalize">
                      guiding you to the closest and most convenient spots
                      effortlessly
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center sm:justify-start items-center gap-4 w-2/3 mx-auto sm:w-full hover:bg-indigo-950 p-3 duration-300  rounded-2xl">
                <div className="bg-indigo-900 px-2 py-3 min-w-max w-1/5 rounded-xl justify-center items-center">
                  <FontAwesomeIcon
                    icon={faMobileScreenButton}
                    size="2x"
                    className="min-w-14"
                  />
                </div>

                <div className="flex flex-col text-start">
                  <div>
                    <h2>User Friendly Interface</h2>
                  </div>
                  <div className="text-xs opacity-80">
                    <p className="capitalize">
                      The app's user-friendly interface ensures a smooth
                      experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl">
          <a href="http://youtube.com" target="_blank">
            <video
              src={video}
              className="mx-auto mt-32 lg:mt-0 rounded-2xl"
              autoPlay={true}
              muted
              loop
            />
          </a>
        </div>
      </div>
    </div>
  );
}
