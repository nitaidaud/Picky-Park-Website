import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IntroductionInfo() {
  return (
    <div id="about" className="max-w-xl mx-auto my-32 text-center">
      <div className="h-24"></div>
      <div className="grid justify-center gap-9">
        <h2 className="intro-title uppercase tracking-wide text-5xl font-black bg-clip-text">Introducing Picky</h2>

        <p className="paragraph-info text-white text-xl font-extralight bg-clip-text">
          the innovative startup app that revolutionizes parking simplicity and
          adds an exciting twist by letting users earn valuable coins every time
          they share a park. With Picky, finding and securing a parking spot is
          no longer a chore – it 's a rewarding experience that keeps you
          dealing with your stuff without worry about where to park.
        </p>

        <div id="partners" className="btn-container duration-300 mt-6 w-fit mx-auto">
          <a href="#what-we-offer">
            <span className="btn-style px-10 py-6 rounded-full text-white text-xs uppercase duration-300">
              what we offer?
              <span className="ml-3 opacity-40">
                <FontAwesomeIcon icon={faArrowDown} size="lg"/>
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
