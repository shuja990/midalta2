import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Features extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-70 bg-f4f6fc">
                <div className="container">
                    <div className="section-title">
                        <h2>The ability to elicit, assessing opportunities</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bx-conversation'></i>
                                    </div>
                                    <h3>Simplify Communication</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="zoomIn" delay={100} animateOnce={true}>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bx-customize'></i>
                                    </div>
                                    <h3>Drag and Drop Widgets</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="zoomIn" delay={150} animateOnce={true}>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bx-slider-alt'></i>
                                    </div>
                                    <h3>Quick Setup</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="zoomIn" delay={200} animateOnce={true}>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bx-reset'></i>
                                    </div>
                                    <h3>Automatise Chatbots</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="zoomIn" delay={150} animateOnce={true}>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bx-bell'></i>
                                    </div>
                                    <h3>Automated Reminders</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="zoomIn" delay={300} animateOnce={true}>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bx-shape-circle'></i>
                                    </div>
                                    <h3>Machine Learning</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;