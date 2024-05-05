import GdprCompliance from "./Footer/GdprCompliance";
import SecurityInfo from "./mainInfo/SecurityInfo";
import LoyaltyAchievements from "./mainInfo/LoyaltyAchievements";
import ParkingSolution from "./mainInfo/ParkingSolution";

export default function Introduction() {
  return (
    <>
      <ParkingSolution />
      <LoyaltyAchievements />
      <SecurityInfo />
      <GdprCompliance />
    </>
  );
}
