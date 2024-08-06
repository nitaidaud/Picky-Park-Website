
import { ReactTyped } from "react-typed";

export default function FindingPark() {
  return (
    <div className="fourth-slide h-screen snap-start grid items-center">
      {/* <div className="grid h-full"> */}
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
                "Say Hello To Picky Park",
                "Stop Driving In Circles!"
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
      {/* <div>
          <FontAwesomeIcon icon={faGhost} size="3x" color="black" />
          <img
            src="https://cdn.discordapp.com/attachments/1211733201161031760/1270354496899383316/Untitled_design_6.png?ex=66b36552&is=66b213d2&hm=c3d1d418aa360a4e9d2a3d54cd41e4c9a75c97348a8db9fd4eb301550dbc45c4&"
            width={60}
            alt="picky logo"
            className="mb-10"
          />
        </div> */}
      {/* <div>
          <h2 className="p-3 bg-white rounded-xl text-xl text-black font-semibold">
            Finding Your Parking
            <h2 className="animate-bounce max-h-2 inline-block">.</h2>
            <h2 className="animate-bounce max-h-2 inline-block delay-75 second-dot">
              .
            </h2>
            <h2 className="animate-bounce max-h-2 inline-block delay-150 third-dot">
              .
            </h2>
          </h2>
        </div> */}
    </div>
    // </div>
  );
}
