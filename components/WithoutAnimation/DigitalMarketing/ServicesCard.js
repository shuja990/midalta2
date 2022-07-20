import React, { Component } from 'react'
import Link from 'next/link'

export default class ServicesCard extends Component {
    render() {
        return (
            <section className="services-area ptb-100">
                <div className="container">
                    <div className="section-title text-left">
                        <span className="sub-title">Services</span>
                        <h2>Let's Check Our Services</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="row m-0">
                                    <div className="col-lg-6 col-md-12 p-0">
                                        <div className="content">
                                            <h3>
                                                <Link href="/service-details">
                                                    <a>Social Media Marketing</a>
                                                </Link>
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

                                            <Link href="/service-details">
                                                <a className="read-more-btn">
                                                    Read More <i className='bx bx-right-arrow-alt'></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12 p-0">
                                        <div className="image bg-1">
                                            <img src="/images/marketing-agency/services-img1.jpg" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="row m-0">
                                    <div className="col-lg-6 col-md-12 p-0">
                                        <div className="content">
                                            <h3>
                                                <Link href="/service-details">
                                                    <a>SEO Optimization</a>
                                                </Link>
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                            
                                            <Link href="/service-details">
                                                <a className="read-more-btn">
                                                    Read More <i className='bx bx-right-arrow-alt'></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12 p-0">
                                        <div className="image bg-2">
                                            <img src="/images/marketing-agency/services-img2.jpg" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="row m-0">
                                    <div className="col-lg-6 col-md-12 p-0">
                                        <div className="content">
                                            <h3>
                                                <Link href="/service-details">
                                                    <a>Advanced Analytics</a>
                                                </Link>
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                            
                                            <Link href="/service-details">
                                                <a className="read-more-btn">
                                                    Read More <i className='bx bx-right-arrow-alt'></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12 p-0">
                                        <div className="image bg-3">
                                            <img src="/images/marketing-agency/services-img3.jpg" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="row m-0">
                                    <div className="col-lg-6 col-md-12 p-0">
                                        <div className="content">
                                            <h3>
                                                <Link href="/service-details">
                                                    <a>Email Marketing</a>
                                                </Link>
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                            
                                            <Link href="/service-details">
                                                <a className="read-more-btn">
                                                    Read More <i className='bx bx-right-arrow-alt'></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12 p-0">
                                        <div className="image bg-4">
                                            <img src="/images/marketing-agency/services-img4.jpg" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-lg-12 col-md-12">
                            <div className="services-btn-box">
                                <Link href="/services3">
                                    <a className="default-btn">
                                        <i className='bx bx-bullseye'></i>View All<span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
