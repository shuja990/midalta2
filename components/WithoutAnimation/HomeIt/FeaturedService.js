import React, { Component } from 'react';
import Link from 'next/link';

class FeaturedService extends Component {
    render() {
        return (
            <div className="features-card-section pt-100 pb-70 bg-f8fbfa">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-features-card tx-center">
                                <i className='bx bx-conversation'></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>IT Consultancy</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-features-card tx-center">
                                <i className='bx bx-laptop'></i>
                                <h3>
                                    <a href="/service-details">Web Development</a>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-features-card tx-center">
                                <i className='bx bxs-badge-check'></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>IT Solutions</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-features-card tx-center">
                                <i className='bx bxs-megaphone'></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Digital Marketing</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedService;