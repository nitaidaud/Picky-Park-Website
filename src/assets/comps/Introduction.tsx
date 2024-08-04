import SecurityInfo from "./mainInfo/SecurityInfo";
import LoyaltyAchievements from "./mainInfo/LoyaltyAchievements";
import ParkingSolution from "./mainInfo/ParkingSolution";
import MeetPicky from "./mainInfo/MeetPicky";
import FindingPark from "./mainInfo/FindingPark";

export default function Introduction() {
  return (
    // <div id="what-we-offer" className="flex flex-col mt-96 mx-auto">
    <div id="what-we-offer" className=" flex flex-col mx-auto">
      <MeetPicky />
      <FindingPark />
      <ParkingSolution />
      {/* <LoyaltyAchievements /> */}
      {/* <SecurityInfo /> */}
    </div>
  );
}
