
import SecurityInfo from "./mainInfo/SecurityInfo";
import LoyaltyAchievements from "./mainInfo/LoyaltyAchievements";
import ParkingSolution from "./mainInfo/ParkingSolution";

export default function Introduction() {
  return (
    <div id="what-we-offer" className="grid gap-20 mt-96 mx-auto">
      <ParkingSolution />
      <LoyaltyAchievements />
      <SecurityInfo />
    </div>
  );
}
