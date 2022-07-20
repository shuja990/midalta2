import React, { Component } from 'react';
import Link from 'next/link';

class FreeTrialArea extends Component {
    render() {
        return (
            <section className="free-trial-area ptb-100 bg-f4f5fe">
                <div className="container">
                    <div className="free-trial-content">
                        <h2>We are ready to work with you to craft winning solutions.</h2>
                        <p>Our team of experts are equipped with the knowledge and experience needed to get the job done</p>

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