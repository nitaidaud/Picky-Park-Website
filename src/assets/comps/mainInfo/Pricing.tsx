export default function Pricing() {
  const pricingCards = [
    {
      title: "Regular",
      price: "$19.99",
    },
    {
      title: "Pro",
      price: "$29.99",
    },
    {
      title: "Master",
      price: "$49.99",
    },
  ];

  return (
    <div id="pricing" className="fifth-slide h-screen snap-start w-full">
      <div className="h-full flex flex-col items-center justify-center w-full">
        <div className="h-3/4 flex justify-center items-center">
          <h2 className="text-6xl h-full font-extrabold pricing-title bg-clip-text flex justify-center items-center">Pricing:</h2>
        </div>
        <div className="flex justify-center items-start h-full w-2/3 mx-auto gap-10">
          {pricingCards.map(({ title, price }) => {
            return (
              <div className="p-3 w-full rounded-xl shadow-xl bg-white bg-opacity-70 h-4/5 min-h-fit hover:scale-105 duration-300">
                <div className={`w-full h-1/5 ${title == "Regular" ? 'bg-indigo-600' : title == "Pro" ? 'bg-red-400' : 'bg-amber-300'} rounded-lg text-center flex items-center justify-center`}>
                  <h2 className="text-black uppercase font-semibold">
                    {title}
                  </h2>
                </div>
                <div className="flex flex-col items-end w-full h-3/4 gap-10">
                  <div className="flex items-end justify-center w-full h-full">
                    <h2 className="text-black font-semibold text-2xl">{price}</h2>
                  </div>
                  <div className={`flex items-center justify-center border-2 ${title == "Regular" ? 'border-indigo-600' : title == "Pro" ? 'border-red-400' : 'border-amber-300'} rounded-lg w-full h-1/3 ${title == "Regular" ? 'hover:bg-indigo-600' : title == "Pro" ? 'hover:bg-red-400' : 'hover:bg-amber-300'} duration-300 ease-linear`}>
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
