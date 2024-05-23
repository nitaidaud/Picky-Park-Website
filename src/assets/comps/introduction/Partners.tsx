export default function Partners() {
  return (
    <div className="min-h-full">
      <h2 className="uppercase text-3xl font-semibold">Our Partners</h2>
      <div className="owl-carousel owl-theme owl-loaded owl-drag mt-11">
        <div className="owl-stage-outer">
          <div className="owl-stage">
            <div className="owl-item ">
              <div className="item">
                <img src="..\Partners\Logos\AppleLogo.png" alt="img" />
              </div>
            </div>

            <div className="owl-item ">
              <div className="item">
                <img src="..\Partners\Logos\appwrite.png" alt="img" />
              </div>
            </div>

            <div className="owl-item ">
              <div className="item">
                <img src="..\Partners\Logos\EDA2.png" alt="img" />
              </div>
            </div>

            <div className="owl-item ">
              <div className="item">
                <img src="..\Partners\Logos\GoDaddy.png" alt="img" />
              </div>
            </div>

            <div className="owl-item ">
              <div className="item">
                <img src="..\Partners\Logos\OpenAI.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="owl-nav disabled"></div>
      </div>
    </div>
  );
}
