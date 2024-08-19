import MeetPicky from "./mainInfo/MeetPicky";
import FindingPark from "./mainInfo/FindingPark";
import Pricing from "./mainInfo/Pricing";
import { useEffect, useRef, useState } from "react";

export default function Introduction() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<number>(
    Number(elementRef.current?.style.backgroundSize.substring(0, 3)),
  );
  const [backgroundSize, setBackgroundSize] = useState(size);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / documentHeight;

    let newSize = 0;

    if (scrollFraction < 0.5) {
      if (size > 100) newSize = 90 + scrollFraction * 100;
      else newSize = 350 + scrollFraction * 100;
    } else {
      if (size > 100) newSize = 140 - (scrollFraction - 0.5) * 100;
      else newSize = 400 - (scrollFraction - 0.5) * 100;
    }
    setSize(newSize);

    setBackgroundSize(newSize);
  };

  console.log(size);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="intro-slide flex flex-col mx-auto"
      style={{
        backgroundSize: `${backgroundSize}%`,
      }}
      ref={elementRef}
    >
      <MeetPicky />
      <FindingPark />
      <Pricing />
      {/* <ParkingSolution /> */}
      {/* <LoyaltyAchievements /> */}
      {/* <SecurityInfo /> */}
    </div>
  );
}
