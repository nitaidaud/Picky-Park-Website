// import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ParkingSolution() {
  return (
    <div className="w-full m-auto h-full min-h-screen pb-16">
      <div className="grid gap-9 h-full mx-auto w-2/3">
        <div className="w-2/6 m-auto">
          <img
            width={"100%"}
            height={"100%"}
            loading="lazy"
            src="..\..\Images\parkingSolutionImg.png"
            alt="introduction image"
          />
        </div>
        <div className="flex justify-between items-center gap-3 w-full text-balance h-full">
          <div className="grid w-3/5 gap-9 h-full">
            <h2 className="intro-title parking-title uppercase tracking-tight text-5xl font-black bg-clip-text">
              Effortless Parking Solutions
            </h2>
            <p className="paragraph-info text-white  text-xl font-extralight bg-clip-text">
              Picky takes the stress out of parking by providing users with
              real-time information on available parking spaces. The app 's
              user-friendly interface ensures a smooth experience, guiding you
              to the closest and most convenient spots effortlessly.
            </p>
          </div>

          <div className="grid w-2/5 gap-9 h-full">
            <h2 className="intro-title parking-title uppercase tracking-tight text-5xl font-black bg-clip-text">
              Lorem, ipsum dolor.
            </h2>
            <p className="paragraph-info text-white  text-xl font-extralight bg-clip-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea qui
              amet quas molestias ipsa iste eius doloribus labore, eos
              blanditiis esse sequi. Cupiditate nemo, dolorem expedita nobis
              ducimus odio fugiat!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
