import React, { Component } from 'react';
import Link from 'next/link';

class FreeTrialArea extends Component {
    render() {
        return (
            <section className="free-trial-area pb-100 bg-f4f5fe">
                <div className="container">
                    <div className="free-trial-content">
                        <h2>We always try to be the best support to you as possible</h2>
                        <p>Qualify your leads & recognize the value of word your customer will love you</p>

                        <Link href="/contact">
                            <a className="default-btn">
                                <i className="bx bxs-hot"></i> 
                                Contact Us
                                <span></span>
                            </a>
                        </Link>
                    </div>
                </div>

                {/* Shape Image */}
                <div className="shape10">
                    <img src="/images/shape/shape10.png" alt="image" />
                </div>
                <div className="shape11">
                    <img src="/images/shape/shape7.png" alt="image" />
                </div>
                <div className="shape12">
                    <img src="/images/shape/shape11.png" alt="image" />
                </div>
                <div className="shape13">
                    <img src="/images/shape/shape12.png" alt="image" />
                </div>
            </section>
        );
    }
}

export default FreeTrialArea;