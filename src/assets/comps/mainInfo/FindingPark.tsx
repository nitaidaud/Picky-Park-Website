import CalcRouteThird from "../../Videos/simulatorVideos/CalcRouteThird.mp4";
import ShareParkingFirst from "../../Videos/simulatorVideos/ShareParkingFirst.mp4";
import SearchParkingSecond from "../../Videos/simulatorVideos/SearchParkingSecond.mp4";
import iPhone from "../../Videos/simulatorVideos/iPhone.png";
import { useEffect, useRef, useState } from "react";

export default function FindingPark() {
  const firstRef = useRef<HTMLVideoElement>(null);
  const secRef = useRef<HTMLVideoElement>(null);
  const thirdRef = useRef<HTMLVideoElement>(null);

  const [firstDuration, setFirstDuration] = useState<number>();
  const [firstCurrentTime, setFirstCurrentTime] = useState<number>();

  const [secDuration, setSecDuration] = useState<number>();
  const [secCurrentTime, setSecCurrentTime] = useState<number>();

  const [thirdDuration, setThirdDuration] = useState<number>();
  const [thirdCurrentTime, setThirdCurrentTime] = useState<number>();

  useEffect(() => {
    console.log("first", firstCurrentTime);

    if (
      thirdRef &&
      thirdCurrentTime &&
      thirdDuration &&
      thirdCurrentTime >= thirdDuration
    ) {
      firstRef.current?.play();
      thirdRef.current?.pause();
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
      setTimeout(() => {
        firstRef.current!.currentTime = 0;
      }, 3000);
      setFirstCurrentTime(0);
    }
  }, [
    firstCurrentTime,
    firstDuration,
    secCurrentTime,
    secDuration,
    thirdCurrentTime,
    thirdDuration,
  ]);

  return (
    <div className="fourth-slide h-screen snap-start w-full flex flex-col justify-center items-center">
      <div className="h-1/4 flex justify-center items-center">
        <h2 className="our-workflow bg-clip-text text-6xl font-bold">
          Our Workflow
        </h2>
      </div>
      <div className="h-1/2 w-2/3 xl:flex justify-center items-center">
        <div className="w-1/2 hover:scale-110 duration-200">
          <div className="w-full flex justify-center items-center relative">
            <div className="w-2/3 h-full absolute">
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
              className="w-7/12 mx-auto mt-3"
              autoPlay={true}
              width={50}
              preload="auto"
              muted
            />
          </div>
        </div>

        <div className="w-1/2 hover:scale-110 duration-200">
          <div className="w-full flex justify-center items-center relative">
            <div className="w-2/3 h-full absolute">
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
              className="w-7/12 mx-auto mt-3"
              // autoPlay={true}
              width={50}
              muted
            />
          </div>
        </div>

        <div className="w-1/2 hover:scale-110 duration-200">
          <div className="w-full flex justify-center items-center relative">
            <div className="w-2/3 h-full absolute">
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
              className="w-7/12 mx-auto mt-3"
              // autoPlay={true}
              width={50}
              muted
            />
          </div>
        </div>
      </div>
    </div>
  );
}
