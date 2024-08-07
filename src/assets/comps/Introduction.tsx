import ParkingSolution from "./mainInfo/ParkingSolution";
import MeetPicky from "./mainInfo/MeetPicky";
import FindingPark from "./mainInfo/FindingPark";
import Pricing from "./mainInfo/Pricing";

export default function Introduction() {
  return (
    // <div id="what-we-offer" className="flex flex-col mt-96 mx-auto">
    <div id="what-we-offer" className="flex flex-col mx-auto">
      <MeetPicky />
      <FindingPark />
      <Pricing />
      {/* <ParkingSolution /> */}
      {/* <LoyaltyAchievements /> */}
      {/* <SecurityInfo /> */}
    </div>
  );
}
