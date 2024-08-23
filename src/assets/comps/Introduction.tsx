import { useEffect, useRef } from 'react';
import MeetPicky from "./mainInfo/MeetPicky";
import FindingPark from "./mainInfo/FindingPark";
import Pricing from "./mainInfo/Pricing";

export default function Introduction() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateBackground = () => {
      if (backgroundRef.current) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        backgroundRef.current.style.transform = `translateY(${scrollTop * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', updateBackground);
    window.addEventListener('resize', updateBackground);

    // Initial call to set the background position
    updateBackground();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateBackground);
      window.removeEventListener('resize', updateBackground);
    };
  }, []);

  return (
    <div className="intro-slide relative overflow-hidden">
      <div 
        ref={backgroundRef}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("/path/to/your/intro-background-image.jpg")', // Replace with your actual image path
        }}
      />
      <div className="relative z-10 flex flex-col mx-auto">
        <MeetPicky />
        <FindingPark />
        <Pricing />
      </div>
    </div>
  );
}