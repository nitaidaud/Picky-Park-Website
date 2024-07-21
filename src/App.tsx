import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouts from "./assets/comps/AppRouts";

function App() {
  const owl = $(".owl-carousel");

  useEffect(() => {
    if (owl)
      owl.owlCarousel({
        responsive: {
          0: {
            items: 1,
          },

          480: {
            items: 1,
          },

          768: {
            items: 2,
          },

          938: {
            items: 3,
          },
        },
        loop: true,
        lazyLoad: true,
        autoplay: true,
        // autoplayTimeout: 1000,
        autoplaySpeed: 1000,
        slideTransition: "linear",
        fluidSpeed: true,
        rewind: false,
        autoplayHoverPause: true,
      });
  }, [owl]);

  return (
    <>
      <Router>
        <AppRouts />
      </Router>
    </>
  );
}

export default App;
