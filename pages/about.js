import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageTitleArea from '../components/Common/PageTitleArea';
import AboutContent from '../components/About/AboutContent';
import DownloadApp from '../components/Common/DownloadApp';
import Footer from '../components/Layouts/Footer';

class About extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <PageTitleArea 
                    pageTitle="About Us" 
                    pageDescription="We do strategy and innovation differently." 
                />
                <AboutContent />
               
                {/* <DownloadApp /> */}

                {/* <FreeTrialArea /> */}
                <Footer />
            </>
        );
    }
}

export default About;