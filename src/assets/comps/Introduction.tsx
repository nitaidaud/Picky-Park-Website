import MeetPicky from "./mainInfo/MeetPicky";
import FindingPark from "./mainInfo/FindingPark";
import Pricing from "./mainInfo/Pricing";
import { useEffect, useRef, useState } from "react";

export default function Introduction() {
  const minScale = 100;
  const maxScale = 200;
  const [scale, setScale] = useState(minScale);
  const containerRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollPosition = window.pageYOffset;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / maxScroll;

      const newScale = minScale + (maxScale - minScale) * scrollPercentage;
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [minScale, maxScale]);

  return (
    <div className="intro-slide flex flex-col mx-auto xl:bg-fixed">
      <img
        ref={containerRef}
        style={{ scale: ` ${scale}%` }}
        className="fixed w-full h-full top-0 left-0 -z-10 bg-scroll"
        src="/Images/streetBg.jpeg"
        alt=""
      />
      <MeetPicky />
      <FindingPark />
      <Pricing />
      {/* <ParkingSolution /> */}
      {/* <LoyaltyAchievements /> */}
      {/* <SecurityInfo /> */}
    </div>
  );
}
