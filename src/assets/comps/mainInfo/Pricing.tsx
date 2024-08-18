import { useTranslation } from "react-i18next";

export default function Pricing() {
  const { t } = useTranslation();

  const pricingCards = [
    {
      title: t("pricing.first.title"),
      coins: 100,
      description: "Go find a job... 1 parking spot and then what?",
      price: t("pricing.first.price"),
      isRecommended: false,
    },
    {
      title: t("pricing.sec.title"),
      coins: 300,
      description: "Nice! 3 parking spots, you're arranged for now",
      price: t("pricing.sec.price"),
      isRecommended: true,
    },
    {
      title: t("pricing.third.title"),
      coins: 500,
      description: "You're the real deal mate!",
      price: t("pricing.third.price"),
      isRecommended: false,
    },
  ];

  return (
    <div
      id="pricing"
      className="fifth-slide mt-32 lg:h-screen min-h-fit snap-start w-full flex flex-col justify-center items-center"
    >
      <div className="h-full flex flex-col items-center justify-center w-full">
        <div className="h-full lg:h-1/4 flex justify-center items-center">
          <h2 className="text-6xl h-full p-3 lg:p-0 font-extrabold pricing-title bg-clip-text flex justify-center items-center drop-shadow-2xl">
            {t("pricing.title")}
          </h2>
        </div>
        <div className="pricing-container lg:flex justify-center items-start h-fit w-3/4 2xl:w-2/3 mx-auto lg:gap-5 2xl:gap-10">
          {pricingCards.map(({ title, price, isRecommended }) => {
            return (
              <div
                key={title + price}
                className="pricing-item grid lg:block p-5 my-20 lg:my-0 w-full rounded-xl shadow-xl bg-white bg-opacity-70 min-h-[350px] md:min-h-[650px] lg:min-h-[350px] 2xl:min-h-[450px] h-full lg:h-4/5 hover:scale-105 duration-300 relative"
              >
                {isRecommended == true && (
                  <div className="flex absolute top-0 justify-center items-center w-full left-0 mx-auto">
                    <h2 className="text-center w-fit px-3 py-2 bg-white bg-opacity-40 border-[2px] rounded-xl absolute -top-3 text-indigo-700 text-3xl lg:text-base">
                      {t("pricing.sec.recommended")}
                    </h2>
                  </div>
                )}
                <div
                  className={`w-full lg:h-2/6 ${
                    title == t("pricing.first.title")
                      ? "bg-indigo-600"
                      : title == t("pricing.sec.title")
                      ? "bg-red-400"
                      : "bg-amber-300"
                  } rounded-lg text-center flex items-center justify-center`}
                >
                  <h2 className="text-black uppercase font-semibold text-4xl lg:text-xl">
                    {title}
                  </h2>
                </div>
                <div className="flex flex-col justify-center items-center w-full h-3/4 gap-10">
                  {/* <div className="flex items-center justify-center w-full h-1/4">
                    <h2 className="text-slate-700 w-3/4 py-4">{description}</h2>
                  </div>
                  <div className="flex items-center justify-center w-full h-1/2">
                    <h2 className="text-orange-300 font-bold text-4xl">{coins}</h2>
                  </div> */}
                  <div className="flex items-center justify-center w-full h-fit">
                    <h2 className="text-black font-bold text-4xl">{price}</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
