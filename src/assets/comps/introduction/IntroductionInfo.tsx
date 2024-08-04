import video from "../../Videos/introVid.mp4";

export default function IntroductionInfo() {
  return (
    <div
      id="about"
      className="introduction text-center min-h-screen h-full snap-start"
    >
      {/* <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-9 h-screen"> */}
      <div className="h-screen">
        {/* <div className="grid lg:flex justify-center items-center text-balance h-full gap-20"> */}
        <div className="h-full grid justify-center items-center">
          <div className="mt-32 text-3xl font-bold bg-black p-3 w-fit mx-auto rounded-lg">
            <h2>Say Hello</h2>
          </div>
          <div className="mx-auto h-full lg:flex w-full items-center gap-10 lg:w-4/5 p-3 rounded-lg">
            <div>
              <video
                src={video}
                className="w-full mx-auto"
                autoPlay={true}
                muted
                loop
              />
            </div>
            {/* <h2 className="intro-title uppercase tracking-wide text-5xl font-black bg-clip-text animate-block">
              Introducing Picky
            </h2> */}
            <div className="w-full h-full lg:flex lg:items-center mt-20 lg:mt-0">
              <p className="paragraph-info text-white text-xl font-extralight bg-clip-text">
                the innovative startup app that revolutionizes parking
                simplicity and adds an exciting twist by letting users earn
                valuable coins every time they share a park. With Picky, finding
                and securing a parking spot is no longer a chore – it 's a
                rewarding experience that keeps you dealing with your stuff
                without worry about where to park.
              </p>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div
        id="partners"
        className="btn-container duration-300  w-fit mx-auto"
      ></div>
    </div>
  );
}
