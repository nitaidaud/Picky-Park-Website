export default function Partners() {
  return (
    <>
    <h2 className="uppercase text-3xl font-semibold">Our Partners</h2>
      <div className="owl-carousel owl-theme owl-loaded owl-drag mt-11">
        <div className="owl-stage-outer">
          <div className="owl-stage">

            <div className="owl-item ">
              <div className="item flex items-center justify-center w-full m-auto gap-3">
                <img src="..\Partners\appleLogoOnly.png" alt="img" className="max-w-8"/>
                <h2 className="mt-2 text-2xl text-black"> Apple </h2>
              </div>
            </div>

            <div className="owl-item ">
              <div className="item">
                <img src="..\Partners\appwrite.png" alt="img" />
              </div>
            </div>

            <div className="owl-item ">
              <div className="item">
                <img src="..\Partners\EDA.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="owl-nav disabled"></div>
      </div>
    </>
  );
}
