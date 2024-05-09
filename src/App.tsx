import "./App.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Footer from "./assets/comps/Footer";
import Introduction from "./assets/comps/Introduction";
import Main from "./assets/comps/Main";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const owl = $(".owl-carousel");
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
      // autoplayTimeout: 4000,
      autoplaySpeed: 1000,
      slideTransition: "linear",
      fluidSpeed: true,
      rewind: false,
      autoplayHoverPause: true,
    });
  }, []);

  return (
    <>
      <div className=" h-full w-full left-0 mt-11">
      <iframe src='https://my.spline.design/911lapstogo-164067615931c022b15d8f226f7d8457/' frameBorder='0' allowFullScreen width='100%' height='100%'></iframe>
      </div>
        <Main />

        <LazyLoadComponent visibleByDefault={true}>
          <Introduction />
        </LazyLoadComponent>

        <LazyLoadComponent visibleByDefault={true}>
          <Footer />
        </LazyLoadComponent>
      
    </>
  );
}

export default App;
