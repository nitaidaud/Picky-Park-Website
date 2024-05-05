import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SecurityInfo() {
  return (
    <div className="grid gap-9 text-center justify-center items-center m-auto">
      <LazyLoadImage
        className="w-2/4 m-auto"
        src="src\assets\Images\securityImg.png"
        alt="securityImg"
      />

      <h2 className="intro-title parking-title uppercase tracking-tight text-5xl font-black bg-clip-text">
        Security and Privacy Our Top Priorities
      </h2>

      <p className="paragraph-info text-white tracking-widest  font-extralight bg-clip-text">
        Ensuring the security and privacy of our users is a cornerstone of
        Picky. Compliant with GDPR standards, we prioritize safeguarding user
        data through robust encryption and meticulous data handling practices
      </p>
    </div>
  );
}
