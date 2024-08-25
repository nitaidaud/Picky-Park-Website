import CalcRouteThird from "/Videos/simulatorVideos/CalcRouteThird.mp4";
import ShareParkingFirst from "/Videos/simulatorVideos/ShareParkingFirst.mp4";
import SearchParkingSecond from "/Videos/simulatorVideos/SearchParkingSecond.mp4";
import iPhone from "/Videos/simulatorVideos/iPhone.png";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function FindingPark() {
  const firstRef = useRef<HTMLVideoElement>(null);
  const secRef = useRef<HTMLVideoElement>(null);
  const thirdRef = useRef<HTMLVideoElement>(null);

  const [currentVideo, setCurrentVideo] = useState<number>(0);

  const { t } = useTranslation();

  useEffect(() => {
    const videoRefs = [firstRef, secRef, thirdRef];

    videoRefs.forEach((ref) => {
      ref.current?.addEventListener("ended", () => {
        setCurrentVideo(currentVideo == 0 ? 1 : currentVideo == 1 ? 2 : 0);
      });
    });

    return () => {
      videoRefs.forEach((ref) => {
        ref.current?.removeEventListener("ended", () => {});
      });
    };
  }, [currentVideo]);

  useEffect(() => {
    const videoRefs = [firstRef, secRef, thirdRef];
    console.log("currentvid:", currentVideo);

    videoRefs.forEach((ref, index) => {
      if (index === currentVideo) {
        ref.current?.play();
      } else {
        ref.current?.pause();
        ref.current!.currentTime = 0;
      }
    });
  }, [currentVideo]);

  return (
    <div
      id="workflow"
      className="fourth-slide lg:h-screen min-h-fit snap-start w-full flex flex-col justify-center items-center"
    >
      <div className="lg:h-1/4 mb-24 lg:mb-0 flex justify-center items-center">
        <h2 className="our-workflow bg-clip-text text-6xl font-bold">
          {t("workflow")}
        </h2>
      </div>
      <div className="lg:h-1/2 w-full lg:w-2/3 flex flex-col lg:flex-row justify-center items-center gap-20 lg:gap-0 mt-10">
        {/* The correct order for video playback */}
        <div
          className={`w-1/2 duration-200 ${
            currentVideo === 0
              ? "scale-110 grayscale-[0]"
              : "scale-100 grayscale-[40%]"
          }`}
        >
          <div className="w-full flex justify-center items-center relative">
            <div className="lg:w-2/3 h-full absolute">
              <img src={iPhone} className="w-full" alt="iPhone" />
            </div>
            <div>
              <video
                playsInline
                ref={firstRef}
                src={ShareParkingFirst}
                className="w-11/12 p-[0.4em] mt-[5.5px] lg:p-0 lg:w-7/12 mx-auto lg:mt-3"
                preload="auto"
                muted
                autoPlay={true}
              />
            </div>
          </div>
        </div>

        <div
          className={`w-1/2 duration-200 ${
            currentVideo === 1
              ? "scale-110 grayscale-[0]"
              : "scale-100 grayscale-[40%]"
          }`}
        >
          <div className="w-full flex justify-center items-center relative">
            <div className="lg:w-2/3 h-full absolute">
              <img src={iPhone} className="w-full" alt="iPhone" />
            </div>
            <div>
              <video
                playsInline
                ref={secRef}
                src={SearchParkingSecond}
                className="w-11/12 p-[0.4em] mt-[5.5px] lg:p-0 lg:w-7/12 mx-auto lg:mt-3"
                preload="auto"
                muted
              />
            </div>
          </div>
        </div>

        <div
          className={`w-1/2 duration-200 ${
            currentVideo === 2
              ? "scale-110 grayscale-[0]"
              : "scale-100 grayscale-[40%]"
          }`}
        >
          <div className="w-full flex justify-center items-center relative">
            <div className="lg:w-2/3 h-full absolute">
              <img src={iPhone} className="w-full" alt="iPhone" />
            </div>
            <div>
              <video
                playsInline
                ref={thirdRef}
                src={CalcRouteThird}
                className="w-11/12 p-[0.4em] mt-[5.5px] lg:p-0 lg:w-7/12 mx-auto lg:mt-3"
                preload="auto"
                muted
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
