import MeetPicky from "./mainInfo/MeetPicky";
import FindingPark from "./mainInfo/FindingPark";
import Pricing from "./mainInfo/Pricing";
import { useEffect, useState } from "react";

export default function Introduction() {
  const [backgroundSize, setBackgroundSize] = useState(100);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / documentHeight;

    let newSize;
    if (scrollFraction <= 0.5) {
      // Increase from 100% to 150% as you scroll to the midpoint
      newSize = 90 + scrollFraction * 100; // 100% at start, 150% at midpoint
    } else {
      // Decrease from 150% to 50% from midpoint to end
      newSize = 140 - (scrollFraction - 0.5) * 100; // 150% at midpoint, 50% at end
    }

    setBackgroundSize(newSize);
  };

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
