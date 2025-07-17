import Collapse from "../components/Collapse";
import Boxes from "../components/boxes";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Form from "../components/forms";
import Hero from "../components/hero";
import Lang from "../components/lang";
import Navbar from "../components/navbar";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="main">
          <div className="blur">
            <Hero>
              <Form />
            </Hero>

            <Carousel />

            <h1 className="head">More reason to join</h1>
            <div className="box1">
              <Boxes />
            </div>
          </div>
        </div>
        <div className="black">
          <Collapse />
          <div className="form">
            <Form />
          </div>
          <Footer />
          <Lang/>
        </div>
      </div>
    </>
  );
}

export default App;
