import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 2,
        }
    }
}

class ClientsFeedbackSliderTwo extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="testimonials-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Whats Our Clients Said About <span>Midalta</span></h2>
                    </div>

                    {this.state.display ? <OwlCarousel 
                    className="testimonials-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-testimonials-item">
                            <div className="client-info">
                                <img src="/images/author/author5.jpg"  alt="image" />
                                <h3>Michel John</h3>
                                <span></span>
                            </div>

                            <div className="testimonials-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                <div className="rating">
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                </div>
                            </div>
                        </div>

                        <div className="single-testimonials-item">
                            <div className="client-info">
                                <img src="/images/author/author6.jpg"  alt="image" />
                                <h3>Sarah Taylor</h3>
                                <span></span>
                            </div>

                            <div className="testimonials-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                <div className="rating">
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                </div>
                            </div>
                        </div>

                        <div className="single-testimonials-item">
                            <div className="client-info">
                                <img src="/images/author/author7.jpg"  alt="image" />
                                <h3>James Andy</h3>
                                <span>CEO at 3S</span>
                            </div>

                            <div className="testimonials-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                <div className="rating">
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                </div>
                            </div>
                        </div>

                        <div className="single-testimonials-item">
                            <div className="client-info">
                                <img src="/images/author/author8.jpg"  alt="image" />
                                <h3>James Andy</h3>
                                <span>CEO at 3S</span>
                            </div>

                            <div className="testimonials-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                <div className="rating">
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                </div>
                            </div>
                        </div>

                        <div className="single-testimonials-item">
                            <div className="client-info">
                                <img src="/images/author/author9.jpg"  alt="image" />
                                <h3>Sarah Taylor</h3>
                                <span></span>
                            </div>

                            <div className="testimonials-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                <div className="rating">
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default ClientsFeedbackSliderTwo;