import { useTranslation } from "react-i18next";
import { ReactTyped } from "react-typed";
import divider from '../../../../public/Images/divider.png'
import pickyLogo from '../../../../public/Images/pickyLogoTyping.png'
export default function MeetPicky() {

  const {t} = useTranslation()
  
  return (
    <div className="relative h-screen">
      <div className="w-full absolute -top-6 left-0">
        <img
          // src="/Images/divider.png"
          src={divider}
          alt="divider"
          className="w-full max-h-14"
        />
      </div>
      <div className="third-slide h-full w-full snap-start">
        <div className="flex justify-center items-center h-full gap-4">
          <div>
            <img
              // src="../Images/pickyLogoTyping.png"
              src={pickyLogo}
              alt="picky logo"
              width={60}
              className="mb-10 animate-pulse"
            />
          </div>
          <div>
            <h2 className="p-3 bg-white rounded-xl text-black font-semibold">
              <ReactTyped
                strings={[
                  // "How Is The Traffic Today?",
                  // "Finding Your Parking Now...",
                  t("findingPark.firstTyping"),
                  t("findingPark.secTyping"),
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
