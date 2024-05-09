export default function Partners() {
  return (
    <>
      <div id="partners" className="owl-carousel owl-theme owl-loaded owl-drag">
        <div className="owl-stage-outer">
          <div className="owl-stage">

            <div className="owl-item ">
              <div className="item">
                <img src="..\Images\GDPRImg.png" alt="img" />
              </div>
            </div>

            <div className="owl-item ">
              <div className="item">
                <img src="..\Images\parkingSolutionImg.png" alt="img" />
              </div>
            </div>

            <div className="owl-item ">
              <div className="item">
                <img src="..\Images\securityImg.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="owl-nav disabled"></div>
      </div>
    </>
  );
}
