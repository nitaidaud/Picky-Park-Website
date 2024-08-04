import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FindingPark() {
  return (
    <div className="fourth-slide h-screen snap-start">
      <div className="flex justify-center items-center h-full gap-4">
        <div>
          <FontAwesomeIcon icon={faGhost} size="3x" color="black" />
        </div>
        <div>
          <h2 className="p-3 bg-white rounded-xl text-black font-semibold">
            Finding Your Parking
            <h2 className="animate-bounce max-h-1.5 inline-block">...</h2>
          </h2>
        </div>
      </div>
    </div>
  );
}
