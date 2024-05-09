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
          items: 1
        },

        480: {
          items: 1
        },

        768: {
          items: 2
        },

        938: {
          items: 3
        },
        
        1200: {
          items: 4
        }
      },
      loop: true,
      lazyLoad: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplaySpeed: 2000,
      // rewind: false,
      autoplayHoverPause: true,
    });
  }, []);

  return (
    <>
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
