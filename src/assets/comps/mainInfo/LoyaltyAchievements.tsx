import { LazyLoadImage } from "react-lazy-load-image-component";

export default function LoyaltyAchievements() {
  return (
    <div className="my-32 grid gap-9">
      <div className="w-full m-auto">
        <LazyLoadImage
        className="w-11/12 md:w-full m-auto"
        src="public\Images\achievementsImg.png"
          alt="achievementsImg"
        />
      </div>

      <div className="grid gap-9">
        <h2 className="intro-title achievements-title uppercase tracking-tight text-5xl font-black bg-clip-text">
          Earn Parking coins with Every Park!
        </h2>

        <p className="paragraph-info text-white tracking-widest text-xl font-extralight bg-clip-text">
          Picky values your loyalty. Each time you use the app to locate and
          reserve a parking space, you earn PickyCoins – your key to unlocking a
          world of rewards. Accumulate these coins and choose from a range of
          enticing offers, turning your daily parking routine into a source of
          genuine benefits.
        </p>
      </div>
    </div>
  );
}
