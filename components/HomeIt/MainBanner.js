import React, { Component } from "react";
import Link from "next/link";

class MainBanner extends Component {
  render() {
    return (
      <>
        <div className="main-banner main-banner-one">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="main-banner-content">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <div className="content">
                        <h1>It’s about growth.</h1>

                        <p>
                          <p>
                            Our team leads with strategy and innovation always
                            at the forefront.
                          </p>
                          <p>
                            {" "}
                            We aim to find new ways for you and your teams to
                            grow, scale your investments, empower innovation,
                            drive effective advocacy, ensuring that you have the
                            best opportunity to enhance your presence and rise
                            above the clutter.
                          </p>
                          <p>
                            {" "}
                            With ten years of professional experience, we are
                            proud to have been instrumental in helping both
                            Private and Government Clients redefine and reinvent
                            their processes, reach their target audience and
                            deliver their message.
                          </p>
                        </p>

                        <Link href="/contact">
                          <a className="default-btn">
                            <i className="bx bxs-hot"></i>
                            Get Started
                            <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12">
                <div className="banner-image mbanner-bg-one">
                  <div className="d-table">
                    <div className="d-table-cell">
                      {/* Animate Image */}
                      <div className="animate-banner-image">
                        <img
                          src="/images/animate-banner-img1.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>

                  {/* For Small Device */}
                  <img
                    src="/images/banner-slider/banner-img1.jpg"
                    className="mbanner-img"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Shape Images */}
          <div className="shape20">
            <img src="/images/shape/shape19.png" alt="image" />
          </div>
          <div className="shape21">
            <img src="/images/shape/shape20.png" alt="image" />
          </div>
          <div className="shape19">
            <img src="/images/shape/shape18.png" alt="image" />
          </div>
          <div className="shape22">
            <img src="/images/shape/shape21.png" alt="image" />
          </div>
          <div className="shape23">
            <img src="/images/shape/shape22.svg" alt="image" />
          </div>
          <div className="shape24">
            <img src="/images/shape/shape23.png" alt="image" />
          </div>
        </div>
      </>
    );
  }
}

export default MainBanner;
