import GdprCompliance from "./Footer/GdprCompliance";
import SecurityInfo from "./mainInfo/SecurityInfo";
import LoyaltyAchievements from "./mainInfo/LoyaltyAchievements";
import ParkingSolution from "./mainInfo/ParkingSolution";

export default function Introduction() {
  return (
    <div className="max-w-xl m-auto">
      <ParkingSolution />
      <LoyaltyAchievements />
      <SecurityInfo />
      <GdprCompliance />
    </div>
  );
}
