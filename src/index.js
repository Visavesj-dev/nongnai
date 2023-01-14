import React, { Component, useRef } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import SinglePage from "./SinglePage";
import List from "./List";
import Demo from "./Demo";
import Footer from "./Footer";
import Nav from "./Nav";
import "./style.css";
import { AppBar, Flashing, Container } from "./index.view";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const App = () => {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <Router>
      <div className="container-fluid text-center">
        <div className="row">
          <AppBar>
            <Nav />
          </AppBar>
          <div
            className="col-12 col-md-12 p-3 p-md-5 text-center"
            style={{ position: "relative" }}
          >
            <Demo />
            
            <h1>ให้คำปรึกษาโดย เภสัชกร</h1>
            <Flashing
              ref={myRef}
              onClick={executeScroll}
              style={{ marginBottom: "10px" }}
            >
              ดูรีวิวทั้งหมด
            </Flashing>
            <div className="row">
              <Route path="/" component={List} exact />
              <Route path="/article/:name" component={SinglePage} />
            </div>
            <img
              src="https://static.wixstatic.com/media/1f9926_96384eaf41e848eaaf841b7f364bff42~mv2.png/v1/fill/w_1123,h_444,al_c,lg_1,q_90,enc_auto/dfdfdf.png"
              alt="dfdfdf.png"
              fetchpriority="high"
            />
            <img
              src="https://static.wixstatic.com/media/1f9926_30541c8acdb54e9b874e1c053e323b04~mv2.png/v1/fill/w_880,h_374,al_c,lg_1,q_85,enc_auto/efgefefef.png"
              alt="efgefefef.png"
              fetchpriority="high"
            />
          </div>
          <div ref={myRef} style={{ width: "300px", margin: "auto" }}>
            <h2 style={{ marginBottom: "10px" }}>รีวิวจากลูกค้าของเรา</h2>
            <Container>
              <Carousel>
                <div>
                  <img src="/1.jpg" />
                </div>
                <div>
                  <img src="/2.jpg" />
                </div>
                <div>
                  <img src="/3.jpg" />
                </div>
                <div>
                  <img src="/7.jpg" />
                </div>
                <div>
                  <img src="/8.jpg" />
                </div>
                <div>
                  <img src="/12.jpg" />
                </div>
              </Carousel>
              <Carousel>
                <div>
                  <img src="/4.jpg" />
                </div>
                <div>
                  <img src="/5.jpg" />
                </div>
                <div>
                  <img src="/6.jpg" />
                </div>
                <div>
                  <img src="/9.jpg" />
                </div>
                <div>
                  <img src="/10.jpg" />
                </div>
                <div>
                  <img src="/11.jpg" />
                </div>
              </Carousel>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

render(<App />, document.getElementById("root"));
