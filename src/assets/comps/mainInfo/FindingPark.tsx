import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import CalcRouteThird from "/Videos/simulatorVideos/CalcRouteThird.mp4";
import ShareParkingFirst from "/Videos/simulatorVideos/ShareParkingFirst.mp4";
import SearchParkingSecond from "/Videos/simulatorVideos/SearchParkingSecond.mp4";
import iPhone from "/Videos/simulatorVideos/iPhone.png";
import firstPoster from "/Videos/simulatorVideos/firstPoster.png";
import secPoster from "/Videos/simulatorVideos/secPoster.png";
import thirdPoster from "/Videos/simulatorVideos/thirdPoster.png";

export default function FindingPark() {
  const firstRef = useRef<HTMLVideoElement>(null);
  const secRef = useRef<HTMLVideoElement>(null);
  const thirdRef = useRef<HTMLVideoElement>(null);
  const [currentVideo, setCurrentVideo] = useState<number>(0);
  const { t } = useTranslation();
  const videos = [ShareParkingFirst, SearchParkingSecond, CalcRouteThird];

  useEffect(() => {
    const videoRefs = [firstRef, secRef, thirdRef];

    const handleVideoEnd = (index: number) => {
      setCurrentVideo((index + 1) % 3);
    };

    videoRefs.forEach((ref, index) => {
      const video = ref.current;
      if (video) {
        video.poster =
          index == 0 ? firstPoster : index == 1 ? secPoster : thirdPoster;
        video.addEventListener("ended", () => handleVideoEnd(index));

        if (index === currentVideo) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });

    return () => {
      videoRefs.forEach((ref, index) => {
        ref.current?.removeEventListener("ended", () => handleVideoEnd(index));
      });
    };
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
        {videos.map((videoSrc, index) => (
          <div
            key={index}
            className={`w-1/2 duration-200 ${
              currentVideo === index
                ? "scale-110 grayscale-[0]"
                : "scale-100 grayscale-[40%]"
            }`}
          >
            <div className="w-full flex justify-center items-center relative">
              <div className="lg:w-2/3 h-full absolute">
                <img src={iPhone} className="w-full" alt="iPhone" />
              </div>
              <video
                poster={`${
                  index == 0
                    ? firstPoster
                    : index == 1
                    ? secPoster
                    : thirdPoster
                }`}
                ref={index === 0 ? firstRef : index === 1 ? secRef : thirdRef}
                src={videoSrc}
                className="w-11/12 p-[0.4em] mt-[5.5px] lg:p-0 lg:w-7/12 mx-auto lg:mt-3"
                preload="auto"
                muted
                autoPlay={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
