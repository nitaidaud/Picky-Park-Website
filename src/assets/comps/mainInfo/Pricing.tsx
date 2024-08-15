export default function Pricing() {
  const pricingCards = [
    {
      title: "Starter",
      price: "20ILS",
      isRecommended: false
    },
    {
      title: "Traveler",
      price: "40ILS",
      isRecommended: true
    },
    {
      title: "Business",
      price: "80ILS",
      isRecommended: false
    },
  ];

  return (
    <div id="pricing" className="fifth-slide mt-32 lg:h-screen min-h-fit snap-start w-full flex flex-col justify-center items-center">
      <div className="h-full flex flex-col items-center justify-center w-full">
        <div className="h-full lg:h-1/4 flex justify-center items-center">
          <h2 className="text-6xl h-full p-3 lg:p-0 font-extrabold pricing-title bg-clip-text flex justify-center items-center drop-shadow-2xl">
            Pricing:
          </h2>
        </div>
        <div className="pricing-container lg:flex justify-center items-start h-fit w-3/4 2xl:w-2/3 mx-auto lg:gap-5 2xl:gap-10">
          {pricingCards.map(({ title, price, isRecommended }) => {
            return (
              <div key={title + price} className="pricing-item grid lg:block p-5 my-20 lg:my-0 w-full rounded-xl shadow-xl bg-white bg-opacity-70 min-h-[350px] md:min-h-[650px] lg:min-h-[450px] h-full lg:h-4/5 hover:scale-105 duration-300 relative">
                {isRecommended == true &&
                  <div className="flex absolute top-0 justify-center items-center w-full left-0 mx-auto">
                    <h2 className="text-center w-fit px-3 py-2 bg-white bg-opacity-40 border-[2px] rounded-xl absolute -top-3 text-indigo-700 text-3xl lg:text-base">Recommended</h2>
                  </div>
                }
                <div
                  className={`w-full lg:h-2/6 ${
                    title == "Starter"
                      ? "bg-indigo-600"
                      : title == "Traveler"
                      ? "bg-red-400"
                      : "bg-amber-300"
                  } rounded-lg text-center flex items-center justify-center`}
                >
                  <h2 className="text-black uppercase font-semibold text-4xl lg:text-xl">
                    {title}
                  </h2>
                </div>
                <div className="flex flex-col items-end w-full h-3/4 gap-10">
                  <div className="flex items-center justify-center w-full h-full">
                    <h2 className="text-black font-bold text-4xl">{price}</h2>
                  </div>
                  <div
                    className={`hidden flex items-center justify-center border-2 ${
                      title == "Starter"
                        ? "border-indigo-600"
                        : title == "Traveler"
                        ? "border-red-400"
                        : "border-amber-300"
                    } rounded-lg w-full h-1/3 ${
                      title == "Regular"
                        ? "hover:bg-indigo-600"
                        : title == "Pro"
                        ? "hover:bg-red-400"
                        : "hover:bg-amber-300"
                    } duration-300 ease-linear`}
                  >
                    <h2 className="text-black font-bold text-xl">Order Now!</h2>
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
