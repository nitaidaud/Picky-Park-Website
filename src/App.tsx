import "./App.css";
// import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouts from "./assets/comps/AppRouts";
import { useEffect, useMemo } from "react";

function App() {
  const options = useMemo<OwlCarousel.Options>(
    () => ({
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
      autoplayTimeout: 2000,
      autoplaySpeed: 1000,
      slideTransition: "linear",
      fluidSpeed: true,
      rewind: false,
      autoplayHoverPause: true,
    }),
    [],
  );

  useEffect(() => {
    const owl = $(".owl-carousel");
    owl.owlCarousel(options);
  }, [options]);

  return (
    <>
      <Router>
        <AppRouts />
      </Router>
    </>
  );
}

export default App;
