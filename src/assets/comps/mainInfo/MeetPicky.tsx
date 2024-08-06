import { ReactTyped } from "react-typed";
export default function MeetPicky() {
  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const position = window.pageYOffset;
  //     setScrollPosition(position);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const scale = scrollPosition * 0.0009;

  return (
    <div className="relative h-screen">
      <div className="w-full absolute -top-6 left-0">
        <img
          src="https://cdn.discordapp.com/attachments/1211733201161031760/1270403197797924864/Untitled_design_8.png?ex=66b392ad&is=66b2412d&hm=122739381353fd05cd438c494bd3a8aa85fcb4ffbc0718dc2ce94bf9e639284c&"
          alt="divider"
          className="w-full max-h-14"
        />
      </div>
      <div
        className="third-slide h-full w-full snap-start"
        // style={{
        //   transform: `scale(${scale})`,
        // }}
      >
        <div className="flex justify-center items-center h-full gap-4">
          <div>
            {/* <FontAwesomeIcon icon={faGhost} size="3x" color="black" /> */}
            <img
              src="https://cdn.discordapp.com/attachments/1211733201161031760/1270354496899383316/Untitled_design_6.png?ex=66b36552&is=66b213d2&hm=c3d1d418aa360a4e9d2a3d54cd41e4c9a75c97348a8db9fd4eb301550dbc45c4&"
              alt="picky logo"
              width={60}
              className="mb-10 animate-pulse"
            />
          </div>
          <div>
            <h2 className="p-3 bg-white rounded-xl text-black font-semibold">
              {/* How is the traffic today? */}{" "}
              <ReactTyped
                strings={[
                  "How Is The Traffic Today?",
                  "Finding Your Parking Now...",
                ]}
                typeSpeed={100}
                loop
                backSpeed={20}
                cursorChar="🔍"
                showCursor={true}
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
