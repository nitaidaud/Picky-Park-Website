import { LazyLoadComponent } from "react-lazy-load-image-component";
import "./App.css";
import Footer from "./assets/comps/Footer";
import Introduction from "./assets/comps/Introduction";
import Main from "./assets/comps/Main";

function App() {
  return (
    <>
      <Main />
      
      <LazyLoadComponent >
        <Introduction />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Footer />
      </LazyLoadComponent>
    </>
  );
}

export default App;
