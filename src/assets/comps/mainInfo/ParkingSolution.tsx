import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ParkingSolution() {
  return (
    <div className="grid gap-9">
      <div id="start" className="w-3/5 m-auto">
        <LazyLoadImage
          src="public\Images\parkingSolutionImg.png"
          alt="introduction image"
        />
      </div>
      <div className="grid gap-9">
        <h2 className="intro-title parking-title uppercase tracking-tight text-5xl font-black bg-clip-text">
          Effortless Parking Solutions
        </h2>
        <p className="paragraph-info text-white  text-xl font-extralight bg-clip-text">
          Picky takes the stress out of parking by providing users with
          real-time information on available parking spaces. The app 's
          user-friendly interface ensures a smooth experience, guiding you to
          the closest and most convenient spots effortlessly.
        </p>
      </div>
    </div>
  );
}
