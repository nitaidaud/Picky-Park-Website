export default function IntroductionInfo() {
  return (
    <div
      id="about"
      className="introduction mx-auto my-32 text-center h-screen bg-indigo-400 snap-start"
    >
      {/* <div className="h-24"></div> */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-9 h-full">
        <div className="grid lg:flex justify-center items-center text-balance h-full gap-20">
          <div className="test-bg  flex flex-col justify-center gap-9 w-full lg:w-1/2 p-3 rounded-lg">
            <h2 className="intro-title uppercase tracking-wide text-5xl font-black bg-clip-text animate-block">
              Introducing Picky
            </h2>

            <p className="paragraph-info text-white text-xl font-extralight bg-clip-text animate-block">
              the innovative startup app that revolutionizes parking simplicity
              and adds an exciting twist by letting users earn valuable coins
              every time they share a park. With Picky, finding and securing a
              parking spot is no longer a chore – it 's a rewarding experience
              that keeps you dealing with your stuff without worry about where
              to park.
            </p>
          </div>

          {/* <div className="test-bg flex flex-col justify-center gap-9 w-full lg:w-1/2 p-3 rounded-lg">
            <h2 className="intro-title uppercase tracking-wide text-5xl font-black bg-clip-text">
              Lorem, ipsum dolor.
            </h2>

            <p className="paragraph-info text-white text-xl font-extralight bg-clip-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              voluptatum cupiditate, excepturi corrupti quae assumenda quod
              earum aspernatur expedita, libero hic modi beatae nesciunt.
              Laborum obcaecati itaque rerum minima modi.
            </p>
          </div> */}
        </div>
      </div>
      <div
        id="partners"
        className="btn-container duration-300  w-fit mx-auto"
      ></div>
    </div>
  );
}
