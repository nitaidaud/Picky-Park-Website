
import SecurityInfo from "./mainInfo/SecurityInfo";
import LoyaltyAchievements from "./mainInfo/LoyaltyAchievements";
import ParkingSolution from "./mainInfo/ParkingSolution";

export default function Introduction() {
  return (
    // <div id="what-we-offer" className="flex flex-col mt-96 mx-auto">
    <div id="what-we-offer" className="flex flex-col mx-auto mt-96">
      <ParkingSolution />
      <LoyaltyAchievements />
      <SecurityInfo />
    </div>
  );
}
