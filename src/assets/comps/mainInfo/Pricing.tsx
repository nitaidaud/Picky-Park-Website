import { useTranslation } from "react-i18next";

export default function Pricing() {
  const { t } = useTranslation();

  const pricingCards = [
    {
      title: t("pricing.first.title"),
      coins: 100,
      description: t("pricing.first.description"),
      price: t("pricing.first.price"),
      isRecommended: false,
    },
    {
      title: t("pricing.sec.title"),
      coins: 300,
      description: t("pricing.sec.description"),
      price: t("pricing.sec.price"),
      isRecommended: true,
    },
    {
      title: t("pricing.third.title"),
      coins: 500,
      description: t("pricing.third.description"),
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
          {pricingCards.map(({ title, price, isRecommended, coins }) => {
            return (
              <div
                key={title + price}
                className="pricing-item grid lg:block p-5 my-20 lg:my-0 w-full rounded-xl shadow-xl bg-white bg-opacity-70 min-h-[350px] md:min-h-[650px] lg:min-h-[350px] 2xl:min-h-[450px] h-full lg:h-4/5 hover:scale-105 duration-300 relative"
              >
                {isRecommended == true && (
                  <div className="flex absolute top-0 justify-center items-center w-full left-0 mx-auto">
                    <h2 className="text-center w-fit px-3 py-2 bg-white bg-opacity-40 border-[2px] rounded-xl absolute -top-3 text-indigo-700 text-3xl lg:text-base z-20">
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
                  } rounded-lg text-center flex items-center justify-center relative`}
                >
                  <div className="coin-item duration-200 absolute w-full flex justify-center items-center">
                  <img
                    src="/Images/coins.png"
                    width={100}
                    className="mx-auto -z-10 animate-spin"
                    alt=""
                  />
                </div>
                  <h2 className="text-black uppercase font-semibold text-4xl lg:text-xl">
                    {title}
                  </h2>
                </div>
                <div className="flex flex-col justify-center items-center w-full lg:h-3/4">
                  <div className="flex items-center justify-center w-full h-3/4 picky-coins">
                    <h2 className="text-black font-bold w-full 2xl:w-4/5 text-5xl 2xl:text-4xl h-fit">
                      {price}
                    </h2>
                  </div>
                  <div className="flex items-center justify-center w-full h-2/3">
                    <h2 className="text-amber-500 font-semibold text-5xl lg:text-3xl xl:text-3xl flex items-center justify-center w-full gap-1">
                      {coins}
                      <img width={30} src="/Images/coins.png" alt="" />
                      {/* <span className="block text-amber-500 font-bold text-xl">
                        {t("pricing.pickyCoins")}
                      </span> */}
                    </h2>
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
