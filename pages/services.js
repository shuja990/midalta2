import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageTitleArea from '../components/Common/PageTitleArea';
import ServicesStyleThree from '../components/Services/ServicesStyleThree';
import ClientsFeedbackSliderTwo from '../components/Common/ClientsFeedbackSliderTwo';
import Footer from '../components/Layouts/Footer';
import ServicesStyleTwo from '../components/Services/ServicesStyleTwo';

class Services3 extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageTitleArea 
                    pageTitle="Services " 
                    pageDescription="Our Services" 
                /> 
                
                <ServicesStyleThree />
                {/* <ServicesStyleTwo /> */}

                {/* <ClientsFeedbackSliderTwo /> */}
                
                <Footer />
            </>
        );
    }
}

export default Services3;