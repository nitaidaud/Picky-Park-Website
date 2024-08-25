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
      const scrollPercentage = scrollPosition / maxScroll - 0.2;

      // Determine the mid-point of the scroll
      const midPoint = 0.5;

      let newScale;
      if (scrollPercentage < midPoint) {
        // Zoom in until the mid-point
        newScale = minScale + (maxScale - minScale) * (scrollPercentage / midPoint);
      } else {
        // Zoom out after the mid-point
        newScale = maxScale - (maxScale - minScale) * ((scrollPercentage - midPoint) / (1 - midPoint));
      }

      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [minScale, maxScale]);

  return (
    <div className="flex flex-col mx-auto intro-slide">
      <img
        ref={containerRef}
        style={{ scale: ` ${scale}%` }}
        className="fixed -z-[100] h-full w-full top-0 left-0"
        src="/Images/streetBg.jpeg"
        alt=""
      />
      <MeetPicky />
      <FindingPark />
      <Pricing />
    </div>
  );
}