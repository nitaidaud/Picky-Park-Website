// import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SecurityInfo() {
  return (
    <div className="h-full min-h-screen bg-stone-500 bg-opacity-80 flex justify-center py-16">
      <div className="w-2/3 mx-auto flex flex-col text-center justify-center items-start gap-10">
        <img
          loading="lazy"
          className="w-1/6 mx-auto"
          src="..\..\Images\securityImg.png"
          alt="securityImg"
        />
        <div className="w-full flex flex-col gap-10 justify-center items-center">
          <h2 className="intro-title w-4/5 parking-title uppercase tracking-tight text-5xl font-black bg-clip-text">
            Security and Privacy Our Top Priorities
          </h2>

          <p className="paragraph-info w-1/2 text-white tracking-widest font-extralight bg-clip-text text-lg">
            Ensuring the security and privacy of our users is a cornerstone of
            Picky. Compliant with GDPR standards, we prioritize safeguarding
            user data through robust encryption and meticulous data handling
            practices
          </p>
        </div>
      </div>
    </div>
  );
}
