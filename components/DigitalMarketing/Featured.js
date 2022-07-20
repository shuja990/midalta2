import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Link from "next/link";

export default class Featured extends Component {
  render() {
    return (
      <div className="featured-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-10 col-sm-12">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={50}
                animateOnce={true}
              >
                <div className="single-featured-box">
                  <img
                    src="/images/marketing-agency/featured-img1.jpg"
                    alt="image"
                  />
                  <h3>STRATEGY</h3>
                  <p className="newww">
                    We go above and beyond the minimum by offering the We help
                    you unlock your unique growth loops and put them into action
                    with frameworks and strategies that drive rapid growth and
                    maximize messaging potential.
                  </p>
                  <Link href="/strategy">
                    <div>
                      <a
                        className="read-more-btn"
                        style={{ marginTop: "10px" }}
                      >
                        Read More <i className="bx bx-right-arrow-alt"></i>
                      </a>
                    </div>
                  </Link>

                  <Link href="/strategy">
                    <a className="link-btn"></a>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>

            {/* <div className="col-lg-4 col-md-6 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                <div className="single-featured-box">
                                    <img src="/images/marketing-agency/featured-img2.jpg" alt="image" />
                                    <h3>FUTURISM & INNOVATION</h3>
                                    <p className="newww">
                                    New business model & concept development Concept-to-commercialization Product strategy Customer experience strategy Omni-channel commerce Enterprise architecture Digital strategy
                                    </p>
                                    <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More <i className='bx bx-right-arrow-alt'></i>
                                        </a>
                                    </Link>

                                    <Link href="/service-details">
                                        <a className="link-btn"></a>
                                    </Link>
                                </div>
                            </ScrollAnimation>
                        </div> */}
            <div className="col-lg-4 col-md-10 col-sm-12">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={100}
                animateOnce={true}
              >
                <div className="single-featured-box">
                  <img
                    src="/images/marketing-agency/featured-img2.jpg"
                    alt="image"
                  />
                  <h3>TECHNOLOGY</h3>
                  <p className="newww">
                    We spend the time to learn from your data and become your
                    business architect. For you, we create phenomenal digital
                    experiences by maximizing new tech. Midalta Innovation
                    blends design, engineering, and analytics expertise to help
                    you build the future for your business.
                  </p>
                  <Link href="/technology">
                    <a className="read-more-btn">
                      Read More <i className="bx bx-right-arrow-alt"></i>
                    </a>
                  </Link>

                  <Link href="/technology">
                    <a className="link-btn"></a>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-lg-4 col-md-10 col-sm-12">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={150}
                animateOnce={true}
              >
                <div className="single-featured-box">
                  <img
                    src="/images/marketing-agency/featured-img3.jpg"
                    alt="image"
                  />
                  <h3>TRANSFORMATION</h3>
                  <p className="newww">
                    Your target audience and industries is constantly moving and
                    shifting focus, which requires the flexible and fluid
                    application of new and advanced engagement options.
                    Regardless of how fast business moves, we are committed and
                    specialize in working through change with you.{" "}
                  </p>
                  <Link href="/transformation">
                    <a className="read-more-btn">
                      Read More <i className="bx bx-right-arrow-alt"></i>
                    </a>
                  </Link>

                  <Link href="/transformation">
                    <a className="link-btn"></a>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
