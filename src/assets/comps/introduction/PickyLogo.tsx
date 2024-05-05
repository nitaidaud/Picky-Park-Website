import { LazyLoadImage } from "react-lazy-load-image-component";

export default function PickyLogo() {
  return (
    <>
      <div className="">
        <span>
          <LazyLoadImage
            className="w-3/5 m-auto"
            src="public\Images\pickyLogoImg.png"
            alt="logo"
          />
        </span>
      </div>

      <p
        className="text-sm uppercase"
        style={{ fontFamily: "Sora", letterSpacing: "0.5em" }}
      >
        Future of parking.
      </p>
    </>
  );
}
