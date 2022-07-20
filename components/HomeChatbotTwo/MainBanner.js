import React, { Component } from 'react';
import Link from 'next/link';

class MainBanner extends Component {
    render() {
        return (
            <div className="main-banner chatbot-main-banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className="main-banner-content">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <div className="content">
                                            <h1>Great startups for connecting people</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    <i className="bx bxs-hot"></i>
                                                    Try It Free Now
                                                    <span></span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12">
                            <div className="banner-image bg-1">
                                <div className="chat-wrapper">
                                    <div className="chat">
                                        <div className="chat-container">
                                            <div className="chat-listcontainer">
                                                <ul className="chat-message-list">
                                                    <li className="message-right ms1">
                                                        <div className="messageinner-ms1">
                                                            <img src="/images/author/author6.jpg" alt="Image" />

                                                            <span className="message-text">
                                                                👋 Hi! I'm a Midalta. Let me know if you have any questions regarding our tool or set up a demo to learn more! 
                                                                <span className="message-time">19:58</span>
                                                            </span>
                                                        </div>
                                                    </li>

                                                     <li className="message-left ms2">
                                                        <div className="messageinner-ms2">
                                                            <img src="/images/author/author7.jpg" alt="Image" />
                                                            
                                                            <span className="message-text">
                                                                I have a Question 
                                                                <span className="message-time">19:58</span>
                                                            </span>
                                                        </div>
                                                    </li>
 
                                                    <li className="message-right ms3">
                                                        <div className="messageinner-ms3">
                                                            <img src="/images/author/author6.jpg" alt="Image" />
                                                            <span className="message-text">
                                                                Sure! Ask me anything! 
                                                                <span className="message-time">19:58</span>
                                                            </span>
                                                        </div>
                                                    </li>

                                                    <li className="message-left ms4">
                                                        <div className="messageinner-ms4">
                                                            <img src="/images/author/author7.jpg" alt="Image" />
                                                            <span className="message-text">
                                                                What are you doing? 
                                                                <span className="message-time">19:58</span>
                                                            </span>
                                                        </div>
                                                    </li>

                                                    <li className="message-right ms5">
                                                        <div className="messageinner-ms5">
                                                            <img src="/images/author/author6.jpg" alt="Image" />
                                                            <span className="message-text">
                                                                I'm great! I would love to get to better understand how you're doing and your needs, so I can best tell you how I can help you. Let me get some contact details.
                                                                <span className="message-time">19:58</span>
                                                            </span>
                                                        </div>
                                                    </li>

                                                    <li className="message-left ms6">
                                                        <div className="messageinner-ms6">
                                                            <img src="/images/author/author7.jpg" alt="Image" />
                                                            <span className="message-text">
                                                                <span className="message-time">19:58</span>
                                                            </span>
                                                        </div>
                                                    </li>
 
                                                    <li className="message-right ms7">
                                                        <div className="messageinner-ms7">
                                                            <img src="/images/author/author6.jpg" alt="Image" />
                                                            <span className="message-text">
                                                                <span className="message-time">19:58</span>
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <img src="/images/banner-img1.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            
                {/* Shape Images */}
                <div className="shape19">
                    <img src="/images/shape/shape18.png" alt="image" />
                </div>
            </div>
        );
    }
}

export default MainBanner;