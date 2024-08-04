import video from "../../Videos/introVid.mp4";

export default function IntroductionInfo() {
  return (
    <div
      id="about"
      className="introduction flex justify-center items-center text-start h-screen snap-start w-full"
    >
      <div className="h-full lg:h-3/4 lg:flex mx-auto w-full lg:w-4/5 items-center justify-center gap-10 p-5 lg:bg-black lg:bg-opacity-70 rounded-xl">
        <div className="w-full grid gap-10 lg:mt-0 max-w-5xl">
          <div className="mt-32 lg:mt-0 text-6xl font-bold   w-full rounded-lg">
            <h2>
              Say Hello To <span className="picky-park-title bg-clip-text">Picky Park!</span>
            </h2>
          </div>
          <div className="w-full h-full lg:flex lg:items-center">
            <p className="paragraph-info text-white text-xl font-extralight bg-clip-text">
              the innovative startup app that revolutionizes parking simplicity
              and adds an exciting twist by letting users earn valuable coins
              every time they share a park. With Picky, finding and securing a
              parking spot is no longer a chore – it's a rewarding experience
              that keeps you dealing with your stuff without worry about where
              to park.
            </p>
          </div>
        </div>
        <div className="max-w-5xl">
          <video
            src={video}
            className="mx-auto mt-32 lg:mt-0 rounded-2xl"
            autoPlay={true}
            muted
            loop
          />
        </div>
      </div>
    </div>
  );
}
