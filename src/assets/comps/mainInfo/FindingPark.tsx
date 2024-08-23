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

  const [firstDuration, setFirstDuration] = useState<number>();
  const [firstCurrentTime, setFirstCurrentTime] = useState<number>();
  const [isFirstPlay, setIsFirstPlay] = useState(true);
  const [isSecPlay, setIsSecPlay] = useState(false);
  const [isThirdPlay, setIsThirdPlay] = useState(false);

  const [secDuration, setSecDuration] = useState<number>();
  const [secCurrentTime, setSecCurrentTime] = useState<number>();

  const [thirdDuration, setThirdDuration] = useState<number>();
  const [thirdCurrentTime, setThirdCurrentTime] = useState<number>();

  const { t } = useTranslation();

  useEffect(() => {
    if (
      thirdRef &&
      thirdCurrentTime &&
      thirdDuration &&
      thirdCurrentTime >= thirdDuration
    ) {
      firstRef.current?.play();
      thirdRef.current?.pause();
      setIsFirstPlay(true);
      setIsSecPlay(false);
      setIsThirdPlay(false);
      setTimeout(() => {
        thirdRef.current!.currentTime = 0;
      }, 3000);
      setThirdCurrentTime(0);
      setFirstCurrentTime(0);
    }
    if (
      secRef &&
      secCurrentTime &&
      secDuration &&
      secCurrentTime >= secDuration
    ) {
      thirdRef.current?.play();
      secRef.current?.pause();
      setIsFirstPlay(false);
      setIsSecPlay(false);
      setIsThirdPlay(true);
      setTimeout(() => {
        secRef.current!.currentTime = 0;
      }, 3000);
      setSecCurrentTime(0);
    }
    if (
      firstRef &&
      firstCurrentTime &&
      firstDuration &&
      firstCurrentTime == firstDuration
    ) {
      secRef.current?.play();
      firstRef.current?.pause();
      setIsFirstPlay(false);
      setIsSecPlay(true);
      setIsThirdPlay(false);
      setTimeout(() => {
        firstRef.current!.currentTime = 0;
      }, 3000);
      setFirstCurrentTime(0);
    }
  }, [
    firstCurrentTime,
    firstDuration,
    isFirstPlay,
    isSecPlay,
    isThirdPlay,
    secCurrentTime,
    secDuration,
    thirdCurrentTime,
    thirdDuration,
  ]);

  return (
    <div
      id="workflow"
      className="fourth-slide lg:h-screen min-h-fit snap-start w-full flex flex-col justify-center items-center"
    >
      <div className="lg:h-1/4 mb-24 lg:mb-0 flex justify-center items-center">
        <h2 className="our-workflow bg-clip-text text-6xl font-bold">
          {/* Our Workflow */}
          {t("workflow")}
        </h2>
      </div>
      <div className="lg:h-1/2 w-full lg:w-2/3 flex flex-col lg:flex-row justify-center items-center gap-20 lg:gap-0 mt-10">
        <div
          className={`w-1/2 duration-200 ${
            isFirstPlay ? "scale-110 grayscale-[0]" : "scale-100 grayscale-[40%]"
          }`}
        >
          <div className="w-full flex justify-center items-center relative">
            <div className="lg:w-2/3 h-full absolute">
              <img src={iPhone} className="w-full" alt="iPhone" />
            </div>
            <video
              onTimeUpdate={(e) => {
                setFirstDuration(Number(e.currentTarget.duration.toFixed()));
                setFirstCurrentTime(
                  Number(e.currentTarget.currentTime.toFixed()),
                );
              }}
              ref={firstRef}
              src={ShareParkingFirst}
              className={`w-11/12  p-[0.4em] mt-[5.5px] lg:p-0 lg:w-7/12 mx-auto lg:mt-3`}
              autoPlay={true}
              width={50} 
              // preload="auto"
              muted
            />
          </div>
        </div>

        <div
          className={`w-1/2 duration-200 ${
            isSecPlay ? "scale-110 grayscale-[0]" : "scale-100 grayscale-[40%]"
          }`}
        >
          <div className="w-full flex justify-center items-center relative">
            <div className="lg:w-2/3 h-full absolute">
              <img src={iPhone} className="w-full" alt="iPhone" />
            </div>
            <video
              onTimeUpdate={(e) => {
                setSecDuration(Number(e.currentTarget.duration.toFixed()));
                setSecCurrentTime(
                  Number(e.currentTarget.currentTime.toFixed()),
                );
              }}
              ref={secRef}
              src={SearchParkingSecond}
              className="w-11/12 p-[0.4em] mt-[5.5px] lg:p-0 lg:w-7/12 mx-auto lg:mt-3"
              // autoPlay={true}
              preload="auto"
              width={50}
              muted
            />
          </div>
        </div>

        <div
          className={`w-1/2 duration-200 ${
            isThirdPlay ? "scale-110 grayscale-[0]" : "scale-100 grayscale-[40%]"
          }`}
        >
          <div className="w-full flex justify-center items-center relative">
            <div className="lg:w-2/3 h-full absolute">
              <img src={iPhone} className="w-full" alt="iPhone" />
            </div>
            <video
              onTimeUpdate={(e) => {
                setThirdDuration(Number(e.currentTarget.duration.toFixed()));
                setThirdCurrentTime(
                  Number(e.currentTarget.currentTime.toFixed()),
                );
              }}
              ref={thirdRef}
              src={CalcRouteThird}
              className="w-11/12 p-[0.4em] mt-[5.5px] lg:p-0 lg:w-7/12 mx-auto lg:mt-3"
              preload="auto"
              width={50}
              muted
            />
          </div>
        </div>
      </div>
    </div>
  );
}
